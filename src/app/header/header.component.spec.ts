import { trigger } from '@angular/animations';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let quoteEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('页面中应该有 input 框', function () {
    let element = fixture.nativeElement.querySelector('.data-input')
    expect(element).not.toBeNull();
  });

  it('input 框 里面的内容是空的', function () {
    let element = fixture.nativeElement.querySelector('.data-input')
    expect(element.value).toBe("");
  });


  it('当 输入框发生变化是  placeholder属性 应该也会变化', function () {
    //获取输入框
    let element = fixture.nativeElement.querySelector('.data-input')
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

  it('数据双向绑定测试', waitForAsync(() => {
    fixture.detectChanges();
    let element = fixture.nativeElement.querySelector('.data-input')
    let p:HTMLElement = fixture.nativeElement.querySelector(".data-p");
    component.setText();
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(p.textContent).withContext("p 标签").toEqual("123");
      expect(component.placeholder).withContext("placeholder 属性").toEqual("123");
      expect(element.value).withContext("element.value").toEqual("123");
    });
  }));

  it('当用户按回车,无内容时,应无反应', function () {
    let element = fixture.nativeElement.querySelector('.data-input')
    spyOn(component, "addData")
    //触发输入事件
    element.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    fixture.detectChanges();
    expect(component.addData).not.toHaveBeenCalled()
  });

  it('当用户按回车,由内容,应该添加此内容', function () {
    let element = fixture.nativeElement.querySelector('.data-input')
    spyOn(component, "addData")
    element.value = "1234";
    //触发输入事件
    element.dispatchEvent(new Event("input"));

    let submit = fixture.nativeElement.querySelector('.form-submit')
    submit.click()
    expect(element.value).withContext("element.value").toEqual("1234");
    expect(component.addData).toHaveBeenCalled()
  });



  it('当用户按回车,内容保存后 应当清空输入框', waitForAsync (() => {
    let element = fixture.nativeElement.querySelector('.data-input')
    component.setText();
    //触发输入事件
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      expect(element.value).toEqual("123");
      let submit = fixture.nativeElement.querySelector('.form-submit')
      submit.click()
      fixture.detectChanges();
      fixture.whenStable().then(()=>{

        expect(element.value).toEqual("");
      })
    })




  }));


});
