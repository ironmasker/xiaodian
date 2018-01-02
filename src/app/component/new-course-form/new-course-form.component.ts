import { FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: fb.control('',[Validators.required]),
      contact: fb.group({
        email:[],
        phone: []
      }),
      topics: fb.array([])
    });
   }

  ngOnInit() {
  }

}
