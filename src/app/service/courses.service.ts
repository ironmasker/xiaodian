import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses() {
    return ['course1', 'course2'];
  }
}
