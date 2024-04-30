import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http :HttpClient) {
   
   }
  users(){
    return this.http.get('https://dogapi.dog/api/v2/breeds')
  }
}
