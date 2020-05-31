import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoPage } from './todo.page';
const routes = [
    {
        path: '',
        component: TodoPage
    }
];
let TodoPageRoutingModule = class TodoPageRoutingModule {
};
TodoPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TodoPageRoutingModule);
export { TodoPageRoutingModule };
//# sourceMappingURL=todo-routing.module.js.map