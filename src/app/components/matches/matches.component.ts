import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchServices } from 'src/app/services/match-services.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matches: any =[];
title: string ="Matches";
teamToFind:any;
findedMatches: any = [];
path: string;
  constructor(private router: Router,
    private matchService :MatchServices) { }

  ngOnInit() {
    // this.matches= allMatches;
    // appel de la méthode du service
    this.matchService.getAllMatches().subscribe(
      (data)=>{
        console.log('here match',data.matchesTab);
        this.matches = data.matchesTab;
        
      }
    );

 



    // get from LS 
    this.teamToFind = JSON.parse(localStorage.getItem('teamToFind'));
    // search matches 
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].teamOne == this.teamToFind.team ||
        this.matches[i].teamTwo == this.teamToFind.team) {
        this.findedMatches.push(this.matches[i]);
      }
    
    }
    // récupérer le path
    this.path = this.router.url;
    // condition for the path
    if (this.path == '/allMatches/search') {
      this.matches = this.findedMatches;
      
    }
   
  }

}
