import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
path:string;
imagePreview:any;
  constructor(private formBuiler:FormBuilder, 
      private userService: UserServiceService,
      private router:Router) { }

  ngOnInit() {
 this.signupForm=   this.formBuiler.group({
      firstName:['', [Validators.required,Validators.minLength(3)]],
      lastName:[''],
      email:[''],
      password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{4,9}')]],
      tel:[''],
      img:[''],
    })
  }
signup(){
  console.log('signup clicked',this.signupForm.value); 
  this.path=this.router.url;
  if (this.path =="/signup") {
    this.signupForm.value.role="user";
  } else {
    this.signupForm.value.role="admin";
  }
  this.signupForm.value.role=this.path =="/signup" ? "user":"admin";
  
 this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe((data)=>{
    console.log('here data after signup',data);
  });
}


onImageSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files[0]; 
  this.signupForm.patchValue({ img: file });

  this.signupForm.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
  this.imagePreview = reader.result as string
  };
  reader.readAsDataURL(file);
  }
}
