import { PasswordValidators } from './password.validators';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-exercise',
  templateUrl: './reactive-form-exercise.component.html',
  styleUrls: ['./reactive-form-exercise.component.css']
})
export class ReactiveFormExerciseComponent implements OnInit {

  form = new FormGroup({
    oldPwd: new FormControl('', Validators.required, PasswordValidators.validOldPassword),
    newPwd: new FormControl('', Validators.required),
    confPwd: new FormControl('', Validators.required)
  },
  PasswordValidators.passwordShouldMatch
  );

  constructor() { }

  ngOnInit() {
  }

  get oldPwd() {
    return this.form.get("oldPwd");
  }

  get newPwd() {
    return this.form.get("newPwd");
  }

  get confPwd() {
    return this.form.get("confPwd");
  }

}
