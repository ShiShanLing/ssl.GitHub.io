import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FatchService {
  constructor(private http:HttpClient) { }

  fetchDataOne(){
    return this.http.get("../../assets/test.json");
  }

}
