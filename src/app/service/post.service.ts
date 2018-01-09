// import { BadRequestError } from './../exception/bad-request-error';
// import { Observable } from 'rxjs/Observable';
// import { NotFoundError } from './../exception/not-found-error';
// import { AppError } from './../exception/app-error';
import { Http /*Response*/ } from '@angular/http';
import { Injectable } from '@angular/core';
// // import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {

  constructor(http : Http) {
    super("http://jsonplaceholder.typicode.com/posts", http);
  }
}
