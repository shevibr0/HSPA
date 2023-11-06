import { Component } from '@angular/core';
import { AlertyfyService } from '../services/alertyfy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

 loggedinUser:string| null="";
constructor(private alertify:AlertyfyService){}

  loggedin(){
    this.loggedinUser = localStorage.getItem('token')
    return this.loggedinUser
  }

  onLogout(){
    localStorage.removeItem('token')
    this.alertify.success("logout success")
  }
}
