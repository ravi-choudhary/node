import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  result:any;
  name:string;
  data;
  createuser = {};

  constructor(private _http: Http) {}

  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);

     // console.log("api" + this.result);
  }
}
