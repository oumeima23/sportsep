
//import express module
const express = require("express");

//import body-parser module
const bodyParser = require("body-parser");

//import bcrypt module
const bcrypt = require("bcrypt");

//import multer module
const multer = require("multer");

//import path module
const path = require("path");

//import jsonwebtoken module
const jwt = require("jsonwebtoken");
// import express-session module
const session = require("express-session");

// import axios module
const axios = require("axios");

// import mongoose module
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/sportDB');


//créer une app BE named app
const app = express();

//configurer le body-parser pour structurer la réponse du BE sous format JSON 
app.use(bodyParser.json());

//configurer le body-parser pour parser le req reçu de FE (accéder au contenu de l'obj)
app.use(bodyParser.urlencoded({ extended: true }));

//security config
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
})
//shortcut: files
app.use('/images', express.static(path.join('bakend/images')));
//Type de media
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (isValid) {
            cb(null, 'bakend/images')
        }


    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

const secretKey = 'croco-souhail-23-cun';
app.use(
    session({
        secret: secretKey,
    }));

//Models Importation
const Match = require("./models/match");
const User = require("./models/user");
const Player = require("./models/player");
const Team = require("./models/team");
const player = require("./models/player");


//simuler BE
let allMatches = [
    { id: 1, teamOne: "FCB", teamTwo: "RMD", scoreOne: 1, scoreTwo: 2 },
    { id: 2, teamOne: "FCB", teamTwo: "JVU", scoreOne: 0, scoreTwo: 3 },
    { id: 3, teamOne: "JUV", teamTwo: "RMD", scoreOne: 3, scoreTwo: 1 },
    { id: 4, teamOne: "EST", teamTwo: "CSS", scoreOne: 3, scoreTwo: 3 },
]

let allUsers = [
    { id: 1, firstName: "mohamed", lastName: "med", email: "med@gmail.com", pwd: "azerty" },
    { id: 2, firstName: "aylene", lastName: "aylene", email: "aylene@gmail.com", pwd: "azerty" }
]


//business logic
//business logic get allMatches
app.get("/matches", (req, res) => {
    console.log("Here into BL: Get ALL matches");
    Match.find().then(
        (docs) => {
            console.log("here docs from DB", docs);
            res.json({ matchesTab: docs })
        }
    );
})

//business logic to get match by id 
app.get('/matches/:id', (req, res) => {
    console.log('here into get matchById');

    //récupérer l'id 
    let matchId = req.params.id;
    Match.findById(matchId).then((doc) => {
        console.log("here doc", doc);
        res.json({ findedMatch: doc });
    })
}
)


//buisness logic to delete selected match
app.delete('/matches/:id', (req, res) => {
    let matchId = req.params.id;
    Match.deleteOne({ _id: matchId }).then(
        (deleteResponse) => {
            console.log("here delete response", deleteResponse);
            if (deleteResponse.deletedCount == 1) {
                res.json({ message: "success" });
            } else {
                res.json({ message: "Echec" });
            }
        }
    )
})


//business logic to add a match
app.post("/matches", (req, res) => {
    console.log("here into add match", req.body);
    let match = new Match(req.body);
    match.save();
    res.json({ msg: "match added with succes" })
});

// business logic to update  match
app.put('/matches', (req, res) => {
    console.log('here is match obj', req.body);
    Match.updateOne({ _id: req.body._id }, req.body).then(
        (updateResponse) => {
            console.log("here update response", updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({ msg: "success" });
            } else {
                res.json({ msg: "Error" });
            }
        }
    )



})

//simuler BE 
let allPlayer = [
    { id: 1, name: "ronaldo", age: 37, position: "attak" },
    { id: 2, name: "messi", age: 40, position: "attak" },]

//business logic get allplayer
app.get("/players", (req, res) => {
    console.log("here into BL : Get All players");
    player.find().then(
        (docs) => {
            console.log("here docs drom DB", docs);
            res.json({ playersTab: docs })
        }
    )
})

//business logic to get player by id 
app.get('/players/:id', (req, res) => {
    console.log('here into get playerById');
    //récupérer l'id 
    let playerId = req.params.id;
    Player.findById(playerId).then((doc) => {
        console.log("here doc", doc);
        res.json({ findedPlayer: doc });
    })
})

//business logic to add player
app.post("/players", (req, res) => {
    console.log("here into add player", req.body);
    Team.findById(req.body.playerId).then(
        (team) => {
            if (!team) {
                return res.json({ msg: "Team Not Found" })
            }
            let player = new player({
                name: req.body.name,
                age: req.body.age,
                position: req.body.position,
                nbr: req.body.nbr,
                team: team._id
            })
            player.save((err, doc) => {
                if (err) {
                    res.json({ msg: "Error" })
                } else {
                    team.players.push(doc);
                    team.save();
                    res.json({ msg: "Player Added with Success" });
                }
            });
        }
    )
})

//business logic delete player
app.delete('/player/:id', (req, res) => {
    let x = req.params.id;
    let pos;
    for (let i = 0; i < allPlayer.length; i++) {
        if (allPlayer[i].id == x) {
            pos = i;
            break;

        }
    }
    allPlayer.splice(pos, 1);
    res.json({ message: "player deleted with success", player })

})

// business logic to update  player
app.put('/players/:id', (req, res) => {
    console.log('here into update BL');
    console.log('here is player obj', req.body);
    console.log('here is player id', req.params.id);
    let id = req.params.id;
    for (let i = 0; i < allPlayer.length; i++) {
        if (allPlayer[i].id == id) {
            allPlayer[i] = req.body;
            break;

        }
    }
    res.json({ msg: "player edited with sucess" })

})

//BL of signup
// app.post('/users/signup',(req,res)=>{



//     console.log('here  signup BL ');
//    let user =req.body;
//    allUsers.push(user);
//    res.json({msg:'user added with success'})
// }
// )
//BL of signup 
app.post("/users/signup",
    multer({ storage: storageConfig }).single("img"),
    (req, res) => {
        console.log("here signup BL", req.body);
        bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
            console.log("here crypted pwd", cryptedPwd);
            req.body.password = cryptedPwd;
            req.body.avatar = `http://localhost:3000/images/${req.file.filename}`;
            let user = new User(req.body);
            user.save();
            res.json({ msg: "Added with success" });
        });
    });

//BL of login

app.post('/users/login', (req, res) => {
    console.log("here login", req.body);
    let user = req.body;
    //check if email existe 
    User.findOne({ email: user.email }).then((doc) => {
        //email is not found
        if (!doc) {
            return res.json({ msg: "Please check your Email" })
        }
        //doc is found
        //compare Pdws
        bcrypt.compare(user.password, doc.password).then((pwdResult) => {
            if (!pwdResult) {
                return res.json({ msg: "Please check Pwd" });
            }
            let userToSend = {
                fName: doc.firstName,
                lName: doc.lastName,
                id: doc._id,
                role: doc.role,
            };
            const token = jwt.sign(userToSend, secretKey, { expiresIn: '1h' });

            res.json({
                msg: "Welcome",
                token: token,
            });
        });
    });
});

//business logic to search match
app.post('/matches', (req, res) => {
    console.log('here into search match by score');
    console.log('here is search match by score', req.body);
    let match = req.body;
    allMatches.push(match);
    let foundMatch = false;
    let matchObj;
    for (let i = 0; i < allMatches.length; i++) {
        if (allMatches[i].scoreOne == match.scoreOne && allUsers[i].scoreTwo == match.scoreTwo) {
            foundMatch = true;
            matchObj = allMatches[i];
            break;
        }
    }
    if (foundMatch) {
        res.json({ msg: true, SOne: userObj.ScoreOne, STwo: userObj.scoreTwo })

    } else {
        res.json({ msg: false })

    }

    res.json({ msg: 'match search by score with succes' })
}
)
//business logic to add team
app.post("/teams", (req, res) => {
    console.log("here into add team", req.body);
    let team = new Team(req.body);
    team.save();
    res.json({ msg: "team added with succes" })
});

//business logic get allTeams
app.get("/teams", (req, res) => {
    console.log("Here into BL: Get ALL teams");
    Team.find().then(
        (docs) => {
            console.log("here docs from DB", docs);
            res.json({ teamsTab: docs })
        }
    );
})

//business logic to get teams by id 
app.get('/teams/:id', (req, res) => {
    console.log('here into get team By Id',req.params.id);
    //récupérer l'id 
    let teamId = req.params.id;
    Team.findById(req.params.id).populate("players")
    
})
//buisness logic to delete selected team
app.delete('/teams/:id', (req, res) => {
    let teamId = req.params.id;
    Team.deleteOne({ _id: teamId }).then(
        (deleteResponse) => {
            console.log("here delete response", deleteResponse);
            if (deleteResponse.deletedCount == 1) {
                res.json({ message: "success" });
            } else {
                res.json({ message: "Echec" });
            }
        })
})

// business logic to update  team
app.put('/teams', (req, res) => {
    console.log('here is team obj', req.body);
    Team.updateOne({ _id: req.body._id }, req.body).then(
        (updateResponse) => {
            console.log("here update response", updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({ msg: "success" });
            } else {
                res.json({ msg: "Error" });
            }
        })
})

//BL to Search weather By City
app.post('/weather',(req,res)=>{
    console.log('here obj', req.body); 
    let city =req.body.city;
    let key= "62ee756a34835483299877a61961cafb";
    let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    axios.get(apiURL).then(
        (apiRes)=>{
            console.log("here api response ", apiRes.data);
            let result ={
                temperature: apiRes.data.main.temp,
                humidity:apiRes.data.main.humidity,
                pressure: apiRes.data.main.pressure,
                speed :apiRes.data.wind.speed,
                icone:`https://openweathermap.org/img/wn/${apiRes.data.weather[0].icon}@2x.png`
            }
        res.json({result :result});
        
        });
});






//pour pouvoir importer l'app ( la rendre exportable)
module.exports = app;