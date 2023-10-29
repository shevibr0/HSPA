import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {
  
  properties: any;
  constructor(private util:HousingService){}

  ngOnInit():void{
this.util.getAllProperties().subscribe({next:(data:any)=>{
  this.properties=data
}, error:(error:any)=>{
  console.log(error)
}
});
  

  }
}
