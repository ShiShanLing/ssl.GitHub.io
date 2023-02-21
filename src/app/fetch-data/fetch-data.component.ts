import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, startWith} from "rxjs";
import {FatchService} from "./fatch.service";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
  providers:[FatchService]
})
export class FetchDataComponent implements OnInit {
  urlStr = "../../assets/test.json"
  constructor(private http:FatchService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  tempData:Object = {};

  fetchData(){
    console.log("fetchData被调用");
    this.http.fetchDataOne().subscribe(data => {
      this.tempData = data;
    });


  }


  fetchDataOne(){
    return this.http.fetchDataOne();
  }

}
