import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {
  @ViewChild('Form') 
  addPropertyForm:any
constructor(private route:Router){}
onBack(){
  this.route.navigate(['/'])
}

onSubmit(Form:boolean){
console.log(this.addPropertyForm)
}
}
