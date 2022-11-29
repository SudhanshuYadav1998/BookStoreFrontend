import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  token: any;

  constructor(private httpService : HttpService) { this.token = localStorage.getItem('token'); }
  getOrders() {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getservice('https://localhost:44322/api/Orders/Get', true, header);
  }
  addOrder(reqData: any) {
     console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postservice('https://localhost:44322/api/Orders/Add', {addressId : reqData}, true, header);
  }

}
