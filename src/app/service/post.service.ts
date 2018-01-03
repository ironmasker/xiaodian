import { BadRequestError } from './../exception/bad-request-error';
import { Observable } from 'rxjs/Observable';
import { NotFoundError } from './../exception/not-found-error';
import { AppError } from './../exception/app-error';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http : Http) { }

  getPosts() : Observable<Response> {
    return this.http.get(this.url);
  }

  createPost(post) : Observable<Response> {
    return this.http.post(this.url, JSON.stringify(post))
    .catch((error: Response)=>{
      if(error.status === 400) {
        return Observable.throw(new BadRequestError(error.json()));
      }
      return Observable.throw(new AppError(error.json()));
    });
  }

  updatePost(post) : Observable<Response> {
    return this.http.put(this.url + "/" + post.id, JSON.stringify(post));
  }

  deletePost(id) : Observable<Response> {
    return this.http.delete(this.url + "/" + id)
    .catch((error:Response)=>{
      if (error.status === 404) {
        return Observable.throw(new NotFoundError());
      }
      return Observable.throw(new AppError(error));
    });
  }
}
