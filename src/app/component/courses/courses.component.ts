import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: string = 'Xiao Dian';
  courses;
  colspan = 2;
  isActive = true;
  imageUrl = 'http://lorempixel.com/400/200';

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

  onSave($event) {
    console.log($event);
    console.log('btn clicked');
    ($event as MouseEvent).stopPropagation();
  }

  onDivClick($event) {
    console.log($event);
    console.log('div clicked');
  }

}
