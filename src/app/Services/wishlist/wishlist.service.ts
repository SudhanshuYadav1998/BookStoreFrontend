import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token: any;

  constructor(private http:HttpService) {this.token=localStorage.getItem('token')  }
  getallwishlist(){    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.getservice('https://localhost:44322/api/Wishlist/GetAllWishlist',true,header)
  }
  removewishlist(id:any){    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.deleteservice(`https://localhost:44322/api/Wishlist/Delete?wishlistId=${id}`,{},true,header)
  }
  addWishlist(id: any) {
    // console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postservice(`https://localhost:44322/api/Wishlist/Add?BookId=${id}`, {}, true, header);
  }

}
