import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name = ''
  evenStyle = {color: 'red', fontSize: '30px'};
  oddStyle = {color: 'black', fontSize: '50px'};
  isHighlight = this.name.length%2===0?true:false;
  currentClass = {circle: !this.isHighlight, square: this.isHighlight};
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
