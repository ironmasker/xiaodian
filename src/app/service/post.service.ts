import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http : Http) { }

  getPosts() : Observable<Response> {
    return this.http.get(this.url);
  }

  createPost(post) : Observable<Response> {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) : Observable<Response> {
    return this.http.put(this.url + "/" + post.id, JSON.stringify(post));
  }

  deletePost(id) : Observable<Response> {
    return this.http.delete(this.url + "/" + id);
  }
}
