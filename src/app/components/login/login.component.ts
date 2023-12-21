import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  obj: any = {};
  title:string="login";
  errorMsg:string="";
  constructor(
    private userService:UserServiceService,
    private router:Router) {}

  ngOnInit() {
  
  }

login(){
  // console.log("obj", this.obj);
  this.userService.login(this.obj).subscribe(
    (data)=>{
      console.log('here data ',data) ;
      if (data.token) {
        sessionStorage.setItem('jwt', data.token);
        let user:any = this.decodeToken(data.token);
        console.log("here decoded user",user);
        
        if (user.role =="admin") {
          this.router.navigate(["admin"]);
          
        } else {
          this.router.navigate([""]);
        }
       
      } else {
        this.errorMsg="please check email/pwd"
      } 
    })
}
decodeToken(token:string){
  return jwt_decode(token);
}
}
