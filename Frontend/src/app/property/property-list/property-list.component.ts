import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {
  properties:Array<any> = [
    {
      "id":1,
      "Name":"The blue house",
      "Type":'House',
      "Price":12000
    },
    {
      "id":1,
      "Name":"The blue house",
      "Type":'House',
      "Price":12000
    },{
      "id":1,
      "Name":"The blue house",
      "Type":'House',
      "Price":12000
    },
    {
      "id":1,
      "Name":"The blue house",
      "Type":'House',
      "Price":12000
    },
    {
      "id":1,
      "Name":"The blue house",
      "Type":'House',
      "Price":12000
    },
    ]
}
