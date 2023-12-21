import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { allPlayer } from 'src/app/data/playersData';
import { PlayerService } from 'src/app/services/player-services.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  playerForm:FormGroup;
  playerId : any;
  player : any={};
  title:string="Add Player"
  id:any;
  obj:any={};
  players:any=allPlayer;
  teams:any=[];
  teamId:any;

  constructor(private formBuiler:FormBuilder,
    private playerService : PlayerService,
    private activateRoute :ActivatedRoute) { }

  ngOnInit() {
    this.playerForm = this.formBuiler.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      age:[''],
      nbr:[''],
      position:[''],
      team:[''],
    })
    this.id= this.activateRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title="edit"
      this.obj=this.players.find(
        (obj:any)=>{
          return obj.id == this.id

        }) 
    }


  }
  
  addOrEditPlayer(){
  
    this.obj.tId=this.teamId;
    console.log('here is player obj',this.obj);

    this.playerService.addPlayer(this.obj).subscribe((data)=>{
      console.log('here data 0', data);  
    });
  }
  selectTeam(evt:any){
    this.teamId = evt.target.value;
 
    
    
  }
}
