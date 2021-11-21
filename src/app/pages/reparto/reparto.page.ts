import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/peliculas';
import { Actor } from '../../interfaces/actores';
import { MensajesService } from '../../services/mensajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.page.html',
  styleUrls: ['./reparto.page.scss'],
})
export class RepartoPage implements OnInit {
  public pelicula: Pelicula;
  public actores: Actor[];
  constructor(private _peliculasService: PeliculasService, private _mensajeService: MensajesService, private _router:Router) { }

  async ngOnInit() {
    if(!this._peliculasService.peliculaActual){
      this._router.navigate(['inicio']);
    }
    this.pelicula = this._peliculasService.peliculaActual;
    try {
      this.actores = await this._peliculasService.getActores(this.pelicula.id);
    }
    catch {
      await this._mensajeService.muestraMensaje('error recogiendo los datos');
    }
    finally {
      await this._mensajeService.ocultaLoading();
    }
  }
}
