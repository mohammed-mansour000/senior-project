import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  isLebanonSelected: boolean = false;
  selectedCountry :string = "";

  constructor() { }
 

  ngOnInit(): void {
   
  }

}
