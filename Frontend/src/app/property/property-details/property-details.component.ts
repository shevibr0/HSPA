import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent {
  id:number=0
constructor(private route:ActivatedRoute, private r:Router){}
ngOnInit(){
  this.id= +this.route.snapshot.params['id']
}
onSelectNext(){
  this.id+=1
  this.r.navigate(['details',this.id])
}
}
