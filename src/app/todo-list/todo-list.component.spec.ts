import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import {HeaderComponent} from "../header/header.component";
import {FormsModule} from "@angular/forms";
import {canEmitType} from "@angular/compiler-cli/src/ngtsc/typecheck/src/type_emitter";
import {disableVersionCheck} from "@angular/cli/src/utilities/environment-options";
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {FetchDataComponent} from "../fetch-data/fetch-data.component";
import {CounterComponent} from "../counter/counter.component";
import {HttpClientModule} from "@angular/common/http";

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let el: DebugElement;

  const routes: Routes = [
    {
      path: '',
      redirectTo: 'identy',
      pathMatch: 'full'
    },
    { path: 'test1', component: FetchDataComponent },
    { path: 'test2', component: CounterComponent },
    {path:'**', redirectTo: 'board'}
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent, HeaderComponent ],
      imports:[FormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TodoListComponent 当调用 addUndoList 是 undoList 将会添加一条数据', function () {

    let data = "下了班去跑步";
    component.addUndoList(data);
    expect(component.undoList).toContain(data);

  });

  it('当 header组件触发 addData时 ,undoList应该多一条数据', function () {

    let data = "下了班去跑步";
    component.undoList.push(data);
    fixture.detectChanges();
    // let header = fixture.nativeElement.querySelector("#header")
    // header.pushData(data);
    expect(component.undoList).toContain(data);
  });




  it('异步请求试试看',  waitForAsync( () => {


    component.undoList = ["test1", "test2"];
    fixture.detectChanges();
    //我获取他的链接干嘛??我应该给他数据,然后判断他的数据对不对,测试思想上就错了.
    //这可以可以用 class id 来获取
    const test_list = el.queryAll(By.css("ul"));
    //这里只能用 标签名称
    const test_li = test_list[0];
    // test_li.queryAll("")

    const test_a = test_li.query(By.css("a"));
    // //更新视图

    test_a.nativeElement.click();
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      console.log("component.router.url==" + component.router.url);
    });

    expect(test_a.nativeElement.href).withContext(test_a.nativeElement.href).toContain("test1");
    expect(test_list.length).not.toBe(0);


  }));


});
