import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  token: any;

  constructor(private httpService : HttpService) { this.token = localStorage.getItem('token'); }
  addAddress(reqData: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postservice('https://localhost:44322/api/Address/Add', reqData, true, header);
  }

  updateAddress(reqData: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.putservice('https://localhost:44322/api/Address/Update', reqData, true, header);
  }

  deleteAddress(id: any) {
    //console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.deleteservice(`https://localhost:44322/api/Address/Delete?addressId=${id}`, {},true, header);
  }

  getAddressById(addressId:any) {
    // console.log(id)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getservice(`Address/Get?addressId=${addressId}`, true, header);
  }

  getAllAddresses() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getservice('https://localhost:44322/api/Address/GetAll', true, header);
  }
}
