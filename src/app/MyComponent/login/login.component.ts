import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:UserServiceService,private route: ActivatedRoute) { }
  email!:string;
  password!:string;
  message:any

  ngOnInit(): void {
  }
  onClickSignup(){
    this.router.navigate(["signup"])
      }

      submitTest(){
        this.service.login(this.email,this.password).subscribe((getData:any)=>{
          console.log(getData);
          this.message=getData;
          console.log(this.message);
        });
          if(this.message==1){
            window.alert("Login Successully");
    
            this.router.navigate([""]);
          }
          else if(this.message==0){
           // window.alert("inavlid email");
          }   
          else if(this.message==2){
           // window.alert("inavlid password");
    
          } 
        
      }
}
