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
const forms_1 = require("@angular/forms");
const header_component_1 = require("./header.component");
describe('HeaderComponent', () => {
    let component;
    let fixture;
    let quoteEl;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            declarations: [header_component_1.HeaderComponent],
            imports: [forms_1.FormsModule]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(header_component_1.HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('页面中应该有 input 框', function () {
        let element = fixture.nativeElement.querySelector('.data-input');
        expect(element).not.toBeNull();
    });
    it('input 框 里面的内容是空的', function () {
        let element = fixture.nativeElement.querySelector('.data-input');
        expect(element.value).toBe("");
    });
    it('当 输入框发生变化是  placeholder属性 应该也会变化', function () {
        //获取输入框
        let element = fixture.nativeElement.querySelector('.data-input');
        //给输入看赋值
        element.value = "1234";
        //触发输入事件
        element.dispatchEvent(new Event("input"));
        //更新视图
        fixture.detectChanges();
        //测试内容  输入框双向绑定的 component.placeholder 也跟着发生了变化.
        expect(component.placeholder).toEqual("1234");
    });
    // fixture.detectChanges();
    it('数据双向绑定测试', (0, testing_1.waitForAsync)(() => {
        fixture.detectChanges();
        let element = fixture.nativeElement.querySelector('.data-input');
        let p = fixture.nativeElement.querySelector(".data-p");
        component.setText();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(p.textContent).withContext("p 标签").toEqual("123");
            expect(component.placeholder).withContext("placeholder 属性").toEqual("123");
            expect(element.value).withContext("element.value").toEqual("123");
        });
    }));
    it('当用户按回车,无内容时,应无反应', function () {
        let element = fixture.nativeElement.querySelector('.data-input');
        spyOn(component, "addData");
        //触发输入事件
        element.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
        fixture.detectChanges();
        expect(component.addData).not.toHaveBeenCalled();
    });
    it('当用户按回车,由内容,应该添加此内容', function () {
        let element = fixture.nativeElement.querySelector('.data-input');
        spyOn(component, "addData");
        element.value = "1234";
        //触发输入事件
        element.dispatchEvent(new Event("input"));
        let submit = fixture.nativeElement.querySelector('.form-submit');
        submit.click();
        expect(element.value).withContext("element.value").toEqual("1234");
        expect(component.addData).toHaveBeenCalled();
    });
    it('当用户按回车,内容保存后 应当清空输入框', (0, testing_1.waitForAsync)(() => {
        let element = fixture.nativeElement.querySelector('.data-input');
        component.setText();
        //触发输入事件
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(element.value).toEqual("123");
            let submit = fixture.nativeElement.querySelector('.form-submit');
            submit.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(element.value).toEqual("");
            });
        });
    }));
});
