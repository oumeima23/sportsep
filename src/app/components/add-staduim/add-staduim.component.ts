import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-staduim',
  templateUrl: './add-staduim.component.html',
  styleUrls: ['./add-staduim.component.css']
})
export class AddStaduimComponent implements OnInit {
  addStadiumForm:FormGroup;
  title:string="Add stadium";
  stadiumsTab:any=[];
  stadium:any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.addStadiumForm =this.formBuilder.group({
      Name:['',[Validators.required,Validators.minLength(3)]],
      city:[''],
      capacity:['']
    })

  }
  addStadium(){
    console.log('here obj',this.addStadiumForm.value);
    this.stadiumsTab= JSON.parse(localStorage.getItem('stadiums') || '[]');
    this.stadium=this.addStadiumForm.value;
    this.stadium.id=this.generateId(this.stadiumsTab)+1;
    console.log('here stadium obj',this.stadium);
    this.stadiumsTab.push(this.stadium);
    localStorage.setItem('stadiums',JSON.stringify(this.stadiumsTab));

  
    

  }


  generateId(T){
    let max;
    if (T.lenght == 0) {
      max=0;  
    } else {
      max=T[0].id;
      for (let i = 1; i < T.length; i++) {
        if (T[i].id>max) {
          max=T[i].id
          
        }
      }
    }
    return max ;
  }
}
