"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListComponent = void 0;
const core_1 = require("@angular/core");
let TodoListComponent = class TodoListComponent {
    constructor(router) {
        this.router = router;
        this.undoList = ["test1", "test2"];
    }
    ngOnInit() {
    }
    addUndoList(value) {
        this.undoList.push(value);
    }
    onClock() {
    }
    getValue() {
        var _a;
        (_a = document.getElementById("test_a")) === null || _a === void 0 ? void 0 : _a.click();
    }
};
TodoListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.css'],
    })
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
