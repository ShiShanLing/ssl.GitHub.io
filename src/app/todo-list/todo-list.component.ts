import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit{

  undoList:string[] = ["test1", "test2"];

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  addUndoList(value:string){
    this.undoList.push(value);
  }

  onClock(){

  }

  getValue() {
    document.getElementById("test_a")?.click();
  }


}
