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
const mock_component_1 = require("./mock.component");
describe('MockComponent', () => {
    let component;
    let fixture;
    let foo;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            declarations: [mock_component_1.MockComponent],
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(mock_component_1.MockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        foo = {
            setBar: function (str) {
                return str;
            }
        };
        let tempFunc = function () {
        };
        spyOn(foo, 'setBar');
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    let tempStr = "not run";
    it('当 runCallback 被调用,将会执行参数里的callback', function () {
        let tempCallback = (str) => {
            console.log("运行了 callback");
            return str;
        };
        component.runCallback(foo.setBar);
        //参数也会做对比
        expect(foo.setBar).toHaveBeenCalledWith("123");
        let tempStr = component.runCallback(tempCallback);
        expect(tempStr)
            .withContext("获取返回值")
            .toEqual("123");
    });
});
