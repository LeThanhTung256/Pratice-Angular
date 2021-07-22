import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  isShow = true;
  
  arrSubjects = ['Angular','NodeJS','React']

  name = "Hidden";
  constructor() { }
  change(){
    this.name = this.isShow?"Show":"Hidden";
    this.isShow = !this.isShow;
  }
  ngOnInit(): void {
  }

}
