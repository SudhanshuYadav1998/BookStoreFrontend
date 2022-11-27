import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  token: any;

  constructor(private httpService:HttpService) {this.token = localStorage.getItem('token') }
  addFeedback(reqData: any) {
    //console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postservice('https://localhost:44322/api/FeedBack/Add', reqData, true, header);
  }

  getAllFeedback(id:any){
    //console.log(id)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.getservice(`https://localhost:44322/api/FeedBack/GetAll?bookId=${id}`, true, header);
  }
}
