import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TodoPageRoutingModule } from './todo-routing.module';
import { TodoPage } from './todo.page';
let TodoPageModule = class TodoPageModule {
};
TodoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TodoPageRoutingModule
        ],
        declarations: [TodoPage]
    })
], TodoPageModule);
export { TodoPageModule };
//# sourceMappingURL=todo.module.js.map