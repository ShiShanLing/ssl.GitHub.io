"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const fetch_data_component_1 = require("./fetch-data/fetch-data.component");
const http_1 = require("@angular/common/http");
const counter_component_1 = require("./counter/counter.component");
const mock_component_1 = require("./mock/mock.component");
const todo_list_component_1 = require("./todo-list/todo-list.component");
const header_component_1 = require("./header/header.component");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const app_routing_module_1 = require("./app-routing.module");
const dialog_1 = require("@angular/material/dialog");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            fetch_data_component_1.FetchDataComponent,
            counter_component_1.CounterComponent,
            mock_component_1.MockComponent,
            todo_list_component_1.TodoListComponent,
            header_component_1.HeaderComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            router_1.RouterLink,
            app_routing_module_1.AppRoutingModule,
            dialog_1.MatDialogModule,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
