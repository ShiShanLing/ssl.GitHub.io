import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponent } from './mock.component';


describe('MockComponent', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;
  let foo: { setBar: (str:string)=>string; };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockComponent ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    foo = {
      setBar: function(str:string){
        return str;
      }
    };

    let tempFunc = function() {

    }

    spyOn(foo, 'setBar');



  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let tempStr = "not run";


  it('当 runCallback 被调用,将会执行参数里的callback', function () {

      let tempCallback = (str:string) => {
        console.log("运行了 callback")
        return str;
      }
      component.runCallback(foo.setBar);
      //参数也会做对比
      expect(foo.setBar).toHaveBeenCalledWith("123");

      let tempStr = component.runCallback(tempCallback);
      expect(tempStr)
        .withContext("获取返回值")
        .toEqual("123");

  });

});
