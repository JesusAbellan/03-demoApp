import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartoPage } from './reparto.page';

const routes: Routes = [
  {
    path: '',
    component: RepartoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartoPageRoutingModule {}
