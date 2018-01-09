import { BadRequestError } from './../exception/bad-request-error';
import { Observable } from 'rxjs/Observable';
import { NotFoundError } from './../exception/not-found-error';
import { AppError } from './../exception/app-error';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url: string, private http : Http) { }

  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response.json())
    .catch(this.handleError);
  }

  update(resource) {
    return this.http.put(this.url + "/" + resource.id, JSON.stringify(resource))
    .map(response => response.json())
    .catch(this.handleError);
  }

  //observable is lazy
  delete(id) {
    return this.http.delete(this.url + "/" + id)
    .map(response => response.json())
    .catch(this.handleError);
  }

  //promise is eager
  deleteEager(id) {
    return this.http.delete(this.url + "/" + id)
    .map(response => response.json())
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    
    if(error.status === 400) {
      return Observable.throw(new BadRequestError(error.json()));
    }
    
    return Observable.throw(new AppError(error));
  }
}
