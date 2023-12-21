import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player-services.service';
import { Router } from '@angular/router';
import { allPlayer } from '../data/playersData';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players:any[];

  constructor(private router:Router , private playerService:PlayerService)  { }
 
  ngOnInit() {
    // this.players=allPlayer;
   this.playerService.getAllPlayers().subscribe(
    (data)=>{
      console.log('here response',data);
      this.players=data.playersTab;
      
    }
  );
  }
 
  
allPlayers(){
  this.playerService.getAllPlayers().subscribe(
    (data)=>{
      console.log('here response',data);
      this.players=data.playersTab;
      
    }
  )

}



  goToDisplayPlayer(x:number){
    this.router.navigate ([`playerInfo/${x}`])
  }
  goToEditPlayer(id){
    this.router.navigate([`editPlayer/${id}`])

  }
  
  deletePlayerById(id:number){
    this.playerService.deletePlayer(id).subscribe(
      (data)=>{
        console.log('here after delete',data.message);
        this.playerService.getAllPlayers().subscribe(
          (data)=>{
            this.players=data.playersTab;
            
          }
        )  
      }
    );

  }
}



