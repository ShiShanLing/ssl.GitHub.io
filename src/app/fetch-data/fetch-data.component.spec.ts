import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import { FetchDataComponent } from './fetch-data.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {defer, of } from 'rxjs';
import {FatchService} from "./fatch.service";

describe('FetchDataComponent', () => {
  let component: FetchDataComponent;
  let fixture: ComponentFixture<FetchDataComponent>;
  let getQuoteSpy: jasmine.Spy;
  let testResults = {"tempKey":"tempValue"};
  beforeEach(async () => {

    const twainService = jasmine.createSpyObj(FatchService, ['fetchDataOne']);
    // Make the spy return a synchronous Observable with the test data
    getQuoteSpy = twainService.fetchDataOne.and.returnValue(of(testResults));


    await TestBed.configureTestingModule({
      declarations: [ FetchDataComponent ],
      imports:[HttpClientModule],
      providers:[{provide: FatchService, useValue: twainService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchDataComponent);
    component = fixture.componentInstance;
  });


  describe("测试异步数据", ()=>{

    beforeEach(()=>{
      getQuoteSpy.and.returnValue(of(testResults));
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('在OnInit之前不应该显示引用', () => {
      fixture.detectChanges();

      expect(getQuoteSpy.calls.any())
        .withContext('fetchData尚未调用')
        .toBe(true);
    });

    it('should show quote after getQuote (fakeAsync)', fakeAsync(() => {
      getQuoteSpy.and.returnValue(of(testResults));
      tick(3000);                   // flush the observable to get the quote
      fixture.detectChanges();  // update view
      expect(component.tempData).toContain({"success": true});
    }));

    it('(fakeAsync)之后显示引用', waitForAsync(()=>{
      fixture.detectChanges();  // ngOnInit()

      fixture.whenStable().then( () => {
        fixture.detectChanges();
        expect(component.tempData).toEqual({"success": true});
      })
    }));

  });


  it('当调用 fetchData 将获取到数据 {"success": true}', function () {
    fixture.detectChanges();
    fixture.whenStable().then(data => {
      expect(component.tempData).toContain({"success": true});
    })
  });
  //
  // it('fetchData 返回 404', function () {
  //
  //   component.fetchDataOne().subscribe(data => {
  //     expect(data).not.toMatch(/404/);
  //
  //   })
  // });
});


function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
