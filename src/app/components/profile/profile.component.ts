import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup;
  title:string="profile";
  obj:any={};
  objId:any;
  constructor(private formBuilder:FormBuilder,private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
  this.objId.this.activatedRouter.snapshot.params.get('id')
  
  }

}
