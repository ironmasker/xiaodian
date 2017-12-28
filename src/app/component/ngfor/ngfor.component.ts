import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  courses = [
    {id:1, name:'course name1'},
    {id:2, name:'course name2'},
    {id:3, name:'course name3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
