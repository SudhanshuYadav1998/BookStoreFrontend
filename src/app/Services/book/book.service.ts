import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private http:HttpService) {this.token=localStorage.getItem('token') }
  getallbooks(){    
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.getservice('https://localhost:44322/api/Book/GetAllBook',true,header)
  }
}
