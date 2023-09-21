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
const fetch_data_component_1 = require("./fetch-data.component");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const fatch_service_1 = require("./fatch.service");
describe('FetchDataComponent', () => {
    let component;
    let fixture;
    let getQuoteSpy;
    let testResults = { "tempKey": "tempValue" };
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const twainService = jasmine.createSpyObj(fatch_service_1.FatchService, ['fetchDataOne']);
        // Make the spy return a synchronous Observable with the test data
        getQuoteSpy = twainService.fetchDataOne.and.returnValue((0, rxjs_1.of)(testResults));
        yield testing_1.TestBed.configureTestingModule({
            declarations: [fetch_data_component_1.FetchDataComponent],
            imports: [http_1.HttpClientModule],
            providers: [{ provide: fatch_service_1.FatchService, useValue: twainService }]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(fetch_data_component_1.FetchDataComponent);
        component = fixture.componentInstance;
    }));
    describe("测试异步数据", () => {
        beforeEach(() => {
            getQuoteSpy.and.returnValue((0, rxjs_1.of)(testResults));
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
        it('should show quote after getQuote (fakeAsync)', (0, testing_1.fakeAsync)(() => {
            getQuoteSpy.and.returnValue((0, rxjs_1.of)(testResults));
            (0, testing_1.tick)(3000); // flush the observable to get the quote
            fixture.detectChanges(); // update view
            expect(component.tempData).toContain({ "success": true });
        }));
        it('(fakeAsync)之后显示引用', (0, testing_1.waitForAsync)(() => {
            fixture.detectChanges(); // ngOnInit()
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(component.tempData).toEqual({ "success": true });
            });
        }));
    });
    it('当调用 fetchData 将获取到数据 {"success": true}', function () {
        fixture.detectChanges();
        fixture.whenStable().then(data => {
            expect(component.tempData).toContain({ "success": true });
        });
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
function asyncData(data) {
    return (0, rxjs_1.defer)(() => Promise.resolve(data));
}
