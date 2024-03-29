import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TodoDetailsPageRoutingModule } from './todo-details-routing.module';
import { TodoDetailsPage } from './todo-details.page';
let TodoDetailsPageModule = class TodoDetailsPageModule {
};
TodoDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TodoDetailsPageRoutingModule
        ],
        declarations: [TodoDetailsPage]
    })
], TodoDetailsPageModule);
export { TodoDetailsPageModule };
//# sourceMappingURL=todo-details.module.js.map