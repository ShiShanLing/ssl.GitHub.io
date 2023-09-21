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
const counter_component_1 = require("./counter.component");
describe('CounterComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            declarations: [counter_component_1.CounterComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(counter_component_1.CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    describe("这是一个加法分组", () => {
        it('测试 addOne 方法', function () {
            component.addOne();
            expect(component.count).toBe(1);
        });
        it('测试 addTwo 方法', function () {
            component.addTwo();
            expect(component.count).toBe(2);
        });
    });
    describe("这是一个减法分组", () => {
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
