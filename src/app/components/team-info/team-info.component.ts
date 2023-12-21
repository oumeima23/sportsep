import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allTeams } from 'src/app/data/teamsData';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
title: string='team info'
  id:any;
  team:any={};
  teams:any=allTeams;
  constructor(private activatedRoute :ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.team=this.teams.find(
      (obj)=>{return obj.id == this.id}
    )
  }
  goToDisplayTeam(id){
    this.router.navigate([`teamInfo/${id}`]);
  this.team=this.team.findById(
    
  )
  }
}
