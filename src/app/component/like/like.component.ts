import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likesCount: number;
  @Input() isActive: boolean;
  @Output() change = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onClick() { 
    console.log("like component clicked")
    this.change.emit();
  }

}
