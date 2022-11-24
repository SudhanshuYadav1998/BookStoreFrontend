import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient: HttpClient) { }
  postservice(url:string,data:any,token:boolean=false,options:any)
  {
   return this.httpclient.post(url,data,token && options)
  }
  getservice(url:string,token:boolean=true,options:any)
  {
    return this.httpclient.get(url, token && options)
  }
  putservice(url:string,data:any,token:boolean=true,options:any)
  {
   return this.httpclient.put(url,data,token && options)
  }
  deleteservice(url:string,data:any,token:boolean=true,options:any)
  {
   return this.httpclient.delete(url,token && options)
  }
}
