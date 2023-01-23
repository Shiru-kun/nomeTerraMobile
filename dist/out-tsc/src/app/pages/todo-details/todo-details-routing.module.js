import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoDetailsPage } from './todo-details.page';
const routes = [
    {
        path: '',
        component: TodoDetailsPage
    }
];
let TodoDetailsPageRoutingModule = class TodoDetailsPageRoutingModule {
};
TodoDetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TodoDetailsPageRoutingModule);
export { TodoDetailsPageRoutingModule };
//# sourceMappingURL=todo-details-routing.module.js.map