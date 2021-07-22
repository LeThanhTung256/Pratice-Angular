import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  newEn = ''
  newVn = ''
  count = 7;
  isShowForm = false;
  insertInto(){
    if(this.newEn !== '' && this.newVn !== '')  
    {this.arrWords.unshift({
      id: 7,  
      en: this.newEn, 
      vn:this.newVn, 
      memorized: false});
      this.newVn = '';
      this.newEn = '';}else{
    this.isShowForm =!this.isShowForm;}
  };
  removeWord(id:number ){
      const index = this.arrWords.findIndex(word => word.id ===id)
      this.arrWords.splice(index,1)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
