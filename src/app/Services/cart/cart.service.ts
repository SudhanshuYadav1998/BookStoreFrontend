import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;

  constructor(private http:HttpService) {this.token=localStorage.getItem('token') }
  getallcartlist(){    
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.getservice('https://localhost:44322/api/Cart/GetAllCartlist',true,header)
  }
  removecartlist(id:any){    
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.deleteservice(`https://localhost:44322/api/Cart/Delete?cartId=${id}`,{},true,header)
  }
}
