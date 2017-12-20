import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',

  styles: [
    ` 
      .glyphicon {
        color: green;
      }

      .glyphicon-star {
        background: black;
      }
    `
  ]
  ,
  styleUrls: ['./stars.component.css']
  ,
  encapsulation: ViewEncapsulation.Emulated
  
  // ,
  // inputs:['isFavorite']
})
export class StarsComponent implements OnInit {
  @Input('is-favorite') isFavorite:boolean;
  @Output('clicks') change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
      this.isFavorite = !this.isFavorite;
      this.change.emit({
        'newValue': this.isFavorite
      });
  }

  setClasses() {
    let classes = {
      'glyphicon-star': this.isFavorite,
      'glyphicon-star-empty': !this.isFavorite
    }
    // console.log(classes);
    return classes;
  }
}

export interface FavoriteChangedEventArgs {
  newValue:boolean
}
