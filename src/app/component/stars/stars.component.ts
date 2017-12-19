import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  isFavorite:boolean 
  constructor() { }

  ngOnInit() {
  }

  onClick() {
      this.isFavorite = !this.isFavorite;
  }

  setClasses() {
    let classes = {
      'glyphicon-star': this.isFavorite,
      'glyphicon-star-empty': !this.isFavorite
    }
    return classes;
  }
}
