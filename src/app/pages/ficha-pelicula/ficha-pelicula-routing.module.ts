import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaPeliculaPage } from './ficha-pelicula.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'descripcion',
    pathMatch:'full'
  },
  {
    path: '',
    component: FichaPeliculaPage,
    children:[
      {
        path:'descripcion',
        loadChildren: () => import('../descripcion/descripcion.module').then(m=>m.DescripcionPageModule)
      },
      {
        path:'reparto',
        loadChildren: () => import('../reparto/reparto.module').then(m=>m.RepartoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaPeliculaPageRoutingModule {}
