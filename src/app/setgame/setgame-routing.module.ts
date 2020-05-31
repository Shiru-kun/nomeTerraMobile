import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetgamePage } from './setgame.page';

const routes: Routes = [
  {
    path: '',
    component: SetgamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetgamePageRoutingModule {}
