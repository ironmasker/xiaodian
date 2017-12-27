import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

}
