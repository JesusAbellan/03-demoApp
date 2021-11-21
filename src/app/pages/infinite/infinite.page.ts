import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonList, ModalController } from '@ionic/angular';
import { PeliculasService } from '../../services/peliculas.service';
import { MensajesService } from '../../services/mensajes.service';
import { Pelicula } from 'src/app/interfaces/peliculas';
import { DetallePeliculaPage } from '../detalle-pelicula/detalle-pelicula.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  constructor(private _peliulasService:PeliculasService, 
    private _mensajeService:MensajesService,
    private _modalController:ModalController,
    private _router:Router) { }
    
  @ViewChild('miInifiniteScroll') infinite:IonInfiniteScroll;
  @ViewChild('miLista') miList:IonList;
  public datos:Pelicula[] = [];
  
  public numPage:number = 1;
  public filtro:string = '';

  ngOnInit() {
    this.loadData(null);
  }

  veAPelicula(item){
    this._peliulasService.peliculaActual = item;
    this._router.navigate(['ficha-pelicula']);
  }

  filtrar(ev:any){
    this.filtro = ev.detail.value;
  }

  async muestraInfoPelicula(peli:Pelicula){
    this.miList.closeSlidingItems();
    const modal = await this._modalController.create({
      component: DetallePeliculaPage,
      componentProps: {
        'titulo': peli.title,
        'pelicula': {
          backdrop_path: peli.backdrop_path,
          adult: peli.adult,
          genre_id: peli.genre_ids,
          id: peli.id,
          original_language: peli.original_language,
          original_title: peli.original_title,
          overview: peli.overview,
          popularity: peli.popularity,
          poster_path: peli.poster_path,
          release_date: peli.release_date,
          title: peli.title,
          video: peli.video,
          vote_average: peli.vote_average,
          vote_count: peli.vote_count,
        }
      }
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();
    if(data){
      peli.title=data.titulo;
      peli.vote_average=Math.floor(data.pelicula.vote_average*100)/100;
      peli.vote_count=data.pelicula.vote_count;
    }
    console.log(data);
  }

  async loadData(ev:any){
    await this._mensajeService.muestraLoading('cargando');
    try{
      const datosNuevos = await this._peliulasService.getPeliculasPorGenero('28',this.numPage);
      this.datos.push(...datosNuevos);
      console.log(datosNuevos);
      this.numPage++;
    }
    catch{
      await this._mensajeService.muestraMensaje('error recogiendo los datos');
    }
    finally{
      await this._mensajeService.ocultaLoading();
    }
    if(ev){
      this.infinite.complete();
    }
  }
}
