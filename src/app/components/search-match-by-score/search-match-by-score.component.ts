import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-match-by-score',
  templateUrl: './search-match-by-score.component.html',
  styleUrls: ['./search-match-by-score.component.css']
})
export class SearchMatchByScoreComponent implements OnInit {
  title:string="Search Match By Score";
  searchMatchForm=FormGroup;
  obj:any=[];
  constructor(private route:Router) { }

  ngOnInit() {
  }

  searchMatchByScore(){
      
      localStorage.setItem('scoreToFind',JSON.stringify(this.obj));
      this.route.navigate(['allMatches/search']);
  }

}
