import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  describe("这是一个加法分组", ()=>{
    it('测试 addOne 方法', function () {
      component.addOne()
      expect(component.count).toBe(1);
    });

    it('测试 addTwo 方法', function () {
      component.addTwo()
      expect(component.count).toBe(2);
    });
  })

  describe("这是一个减法分组", ()=> {

    it('测试 minusOne 方法', function () {
      component.minusOne();
      expect(component.count).toBe(-1);
    });

    it('测试 minusTwo 方法', function () {
      component.minusTwo();
      expect(component.count).toBe(-2);
    });

  });





});
