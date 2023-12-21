//import app from app.js
const { log } = require('console');
const app= require('./bakend/app');

app.listen(3000 , ()=> {
   console.log('express app is complied successfully');
})