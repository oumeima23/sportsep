import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() x:any;

  constructor() { }

  ngOnInit() {
  }

scoreResult(a,b){
  if(a>b){
    return 2
  }
  else if(a<b){
    return 1
    
  }
  else{
    return 0
  }
}
teamResult(a,b){
  if (a>b) {
    return 'red'
  }
  else if(a<b){
    return 'blue'
  }
  else{
    return 'yellow'
  }
}
}
