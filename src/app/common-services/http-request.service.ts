import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:3000/";

  request(requestType:any,requestUrl:any,requestBody:any):any{

    //for get request..
    if(requestType==='get'){
      return this.http.get<any>(this.baseUrl+requestUrl)
    }

    //for post request..
    if(requestType==='post'){
       return this.http.post<any>(this.baseUrl+requestUrl,requestBody)
    }

    //for updating ..
    if(requestType==='put'){
      return this.http.put<any>(this.baseUrl+requestUrl,requestBody)
    }

    //for deleting...
    if(requestType==='delete'){
      return this.http.delete<any>(this.baseUrl+requestUrl)
    }
  }
}
