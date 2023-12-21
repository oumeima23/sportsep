import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allTeams } from '../data/teamsData';
import { FormGroup } from '@angular/forms';
import { TeamServicesService } from '../services/team-services.service';


@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
  export class TeamsTableComponent implements OnInit {
    teamForm: FormGroup;
    teams: any= [];
    path: string;
    isDisplayed:boolean=false;
    obj:any={};
    findedTeams:any=[]
  
    constructor(private router :Router,private teamService: TeamServicesService) { }
  
    ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      (data)=>{
        console.log('here response',data);
        this.teams=data.teamsTab  
      });
    this.allTeams;
 
}

allTeams(){
  this.teamService.getAllTeams().subscribe(
    (data)=>{
      console.log('here response',data);
      this.teams=data.teamsTab;
      
    })
}

  goToDisplayTeam(id){
this.router.navigate([`teamInfo/${id}`]);
  }


  goToEditTeam(id:number){
this.router.navigate([`editTeam/${id}`]);
  }
 
 deleteTeamById(id:number){
  this.teamService.deleteTeam(id).subscribe(
    (data)=>{
      console.log('here after delete',data.message); 
      this.allTeams();
    }
  )

 }
}


  
 

