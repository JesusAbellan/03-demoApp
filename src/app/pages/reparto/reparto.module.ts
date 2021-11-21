import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepartoPageRoutingModule } from './reparto-routing.module';

import { RepartoPage } from './reparto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartoPageRoutingModule
  ],
  declarations: [RepartoPage]
})
export class RepartoPageModule {}
