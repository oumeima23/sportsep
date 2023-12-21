import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allPlayer } from 'src/app/data/playersData';
import { PlayerService } from 'src/app/services/player-services.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player:any[];
@Input() y:any;
  constructor(private router:Router,
     private playerService :PlayerService) { }

  ngOnInit() {
    // this.player=allPlayer;
    // appel de la méthode de service
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        console.log('here player',data.playersTab);
        this.player = data.playersTab;
        
      }
    );
    
  }

}
