import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaPeliculaPageRoutingModule } from './ficha-pelicula-routing.module';

import { FichaPeliculaPage } from './ficha-pelicula.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaPeliculaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [FichaPeliculaPage]
})
export class FichaPeliculaPageModule {}
