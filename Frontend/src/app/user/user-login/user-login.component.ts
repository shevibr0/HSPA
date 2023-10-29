import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
constructor(private auth:AuthService, private alertify:AlertyfyService,
  private r:Router){}



onLogin(loginForm:NgForm){
console.log(loginForm.value)
this.auth.authUser(loginForm.value).subscribe((token)=>{
  if(token?.userName){
    localStorage.setItem('token',token.userName)
    this.alertify.success("success")
    this.r.navigate(['/'])
    console.log(token)
    console.log(token.userName)
  }

else{
  this.alertify.error("not")
  console.log(token)
}
})}
}