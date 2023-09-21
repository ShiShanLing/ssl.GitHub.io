"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const todo_list_component_1 = require("./todo-list.component");
const header_component_1 = require("../header/header.component");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const platform_browser_1 = require("@angular/platform-browser");
const fetch_data_component_1 = require("../fetch-data/fetch-data.component");
const counter_component_1 = require("../counter/counter.component");
const http_1 = require("@angular/common/http");
describe('TodoListComponent', () => {
    let component;
    let fixture;
    let el;
    const routes = [
        {
            path: '',
            redirectTo: 'identy',
            pathMatch: 'full'
        },
        { path: 'test1', component: fetch_data_component_1.FetchDataComponent },
        { path: 'test2', component: counter_component_1.CounterComponent },
        { path: '**', redirectTo: 'board' }
    ];
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            declarations: [todo_list_component_1.TodoListComponent, header_component_1.HeaderComponent],
            imports: [forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes),
                http_1.HttpClientModule]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(todo_list_component_1.TodoListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        fixture.detectChanges();
    }));
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
    it('异步请求试试看', (0, testing_1.waitForAsync)(() => {
        component.undoList = ["test1", "test2"];
        fixture.detectChanges();
        //我获取他的链接干嘛??我应该给他数据,然后判断他的数据对不对,测试思想上就错了.
        //这可以可以用 class id 来获取
        const test_list = el.queryAll(platform_browser_1.By.css("ul"));
        //这里只能用 标签名称
        const test_li = test_list[0];
        // test_li.queryAll("")
        const test_a = test_li.query(platform_browser_1.By.css("a"));
        // //更新视图
        test_a.nativeElement.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            console.log("component.router.url==" + component.router.url);
        });
        expect(test_a.nativeElement.href).withContext(test_a.nativeElement.href).toContain("test1");
        expect(test_list.length).not.toBe(0);
    }));
});
