import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http:HttpClient) { }
  
registerUser(user:any){
  return this.http.post("http://localhost:8080/user/register",user);
}

login(email:string, password:string){
  return this.http.get("http://localhost:8080/user/login"+"?email="+email+"&password="+password);
  
}
}
