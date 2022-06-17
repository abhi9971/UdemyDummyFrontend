import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/Model/user';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private service:UserServiceService) { }
  user:user=new user("","","","","")
  //user:any
  ngOnInit(): void {
  }
  onClickLogin(){
this.router.navigate(["login"])
  }

  OnSignUp(){
    console.log(this.user)
    this.service.registerUser(this.user).subscribe((getData:any)=>{
     
    this.router.navigate(["login"])

    })
  }}
