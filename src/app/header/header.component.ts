import {Component, HostListener, OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  datas:string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  placeholder = "";

  setText(){
    this.placeholder = "123";
  }

  clearTest(){
    this.placeholder = "";
  }

  addData(){
    console.log("触发了add");
    this.pushData(this.placeholder)
    this.clearTest()
  }

  pushData(str:string){
    this.datas.push(str);
  }


}
