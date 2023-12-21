import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allMatches } from '../data/matchesData';
import { MatchServices } from '../services/match-services.service';





@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches: any=[]

  constructor(private router: Router,
    private matchService : MatchServices) { }

  ngOnInit() {
    this.matches=allMatches;
    this.matchService.getAllMatches().subscribe(
      (data)=>{
        console.log('here response',data);
        this.matches=data.matchesTab;
        
      }
    );
    this.allMatches()
  }


allMatches(){
  this.matchService.getAllMatches().subscribe(
    (data)=>{
      console.log('here response',data);
      this.matches=data.matchesTab;
      
    }
  )

}



  goToDisplay(id:number){
    this.router.navigate([`matchInfo/${id}`]);

  }
  goToEdit(id:number){
    this.router.navigate([`editMatch/${id}`]);
  }

 deleteMatchById(id:number){
  this.matchService.deleteMatch(id).subscribe(
    (data)=>{
      console.log('here after delete',data.message); 
      this.allMatches();
    }
  )

 }
}
