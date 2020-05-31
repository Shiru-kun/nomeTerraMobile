import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetgamePageRoutingModule } from './setgame-routing.module';

import { SetgamePage } from './setgame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetgamePageRoutingModule
  ],
  declarations: [SetgamePage]
})
export class SetgamePageModule {}
