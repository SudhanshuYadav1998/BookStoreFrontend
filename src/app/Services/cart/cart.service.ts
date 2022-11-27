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
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.getservice('https://localhost:44322/api/Cart/GetAllCartlist',true,header)
  }
  removecartlist(id:any){    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.deleteservice(`https://localhost:44322/api/Cart/Delete?cartId=${id}`,{},true,header)
  }
  updateCrtQty(id:any,qty:any){    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.putservice(`https://localhost:44322/api/Cart/UpdateQty?cartId=${id}&bookQty=${qty}`,{},true,header)
  }
  addToCart(data:any) {
    console.log(data);
    
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postservice('https://localhost:44322/api/Cart/Add', data, true, header);
  }

}
