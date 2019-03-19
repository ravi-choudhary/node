import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Array<any>;
  createuser:Array<any>;
  name;
  User_Id;
  

  constructor(private _dataService: DataService,private _http: Http) {
	 this._dataService.getUsers().subscribe(res => this.users = res);

   console.log(this.users);
  }

  deletedata(val)
  {
	 this._http.post('/api/deletedata', { 'User_Id': val }).subscribe(res => { this._dataService.getUsers().subscribe(res => this.users = res); },  (err) => { console.log(err); });
     this._dataService.getUsers().subscribe(res => this.users = res);
  }
 
  editdata(val,val2)
  {
	 this.name = val;
	 this.User_Id = val2;
  }
   

  insertdata(name)
  { 
    this._http.post('/api/insertdata', { 'name': this.name }).subscribe(res => { this._dataService.getUsers().subscribe(res => this.users = res); }, (err) => { console.log(err);});
	this.name = "";
    this._dataService.getUsers().subscribe(res => this.users = res);

    console.log(this.users);
	
  }
  
  UpdateUser(User_Id , name) 
  {
	this._http.post('/api/UpdateUser', { 'User_Id': this.User_Id , 'name' : this.name}).subscribe(res => { this._dataService.getUsers().subscribe(res => this.users = res); }, (err) => { console.log(err);});
	this.name = "";
    this._dataService.getUsers().subscribe(res => this.users = res);	  

    
  }
  

}
