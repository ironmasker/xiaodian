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
  email = 'me@dbs.com';
  message=`
  The petition calls for the UK government to "put pressure on the Libyan government to take immediate action to stop these criminals from selling more people, to set current prisoners free, arrest the criminals and end this."
  `

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
  
  onKeyUp() {
      console.log(this.email);
    
  }

}
