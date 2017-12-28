import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-home',
  templateUrl: './ngfor-home.component.html',
  styleUrls: ['./ngfor-home.component.css']
})
export class NgforHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses;

  loadCourses() {
    this.courses = [
      {id:1, name:"course name1"},
      {id:2, name:"course name2"},
      {id:3, name:"course name3"}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  addCourse() {
    this.courses.push({id:4, name:"course name4"});
  }
}
