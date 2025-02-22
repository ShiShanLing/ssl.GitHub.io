"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchDataComponent = void 0;
const core_1 = require("@angular/core");
const fatch_service_1 = require("./fatch.service");
let FetchDataComponent = class FetchDataComponent {
    constructor(http) {
        this.http = http;
        this.urlStr = "../../assets/test.json";
        this.tempData = {};
    }
    ngOnInit() {
        this.fetchData();
    }
    fetchData() {
        console.log("fetchData被调用");
        this.http.fetchDataOne().subscribe(data => {
            this.tempData = data;
        });
    }
    fetchDataOne() {
        return this.http.fetchDataOne();
    }
};
FetchDataComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-fetch-data',
        templateUrl: './fetch-data.component.html',
        styleUrls: ['./fetch-data.component.css'],
        providers: [fatch_service_1.FatchService]
    })
], FetchDataComponent);
exports.FetchDataComponent = FetchDataComponent;
