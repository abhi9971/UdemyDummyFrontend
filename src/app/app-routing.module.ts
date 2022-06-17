import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';
import { LoginComponent } from './Mycomponent/login/login.component';
import { SignupComponent } from './Mycomponent/signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
