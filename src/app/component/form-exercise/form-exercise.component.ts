import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrls: ['./form-exercise.component.css']
})
export class FormExerciseComponent implements OnInit {
  categories = [
    {id:1,name:"Development"},
    {id:2,name:"Art"},
    {id:3,name:"Languages"}
  ];

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    console.log(f);
  }

}
