import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authUser(user:User){
   let UserArray=[]
   const storedUsers = localStorage.getItem('Users');
   if(storedUsers!==null){
    UserArray =JSON.parse(storedUsers)
    const foundUser=UserArray.find((p:any)=>p.userName===user.userName && p.password===user.password)
    console.log("auth")
    return of(foundUser)
   
  }
  return of(null)
}
}