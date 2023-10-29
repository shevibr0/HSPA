import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  addUser(user:User){
    let users=[]
    const l=localStorage.getItem('Users')
    if(l){
        users=JSON.parse(l)
        users=[user,...users]
    }else{
        users=[user]
    }
        localStorage.setItem('Users',JSON.stringify(users))
    }
   
  
}
