import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actores';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-ficha-pelicula',
  templateUrl: './ficha-pelicula.page.html',
  styleUrls: ['./ficha-pelicula.page.scss'],
})
export class FichaPeliculaPage implements OnInit {
  public numActores:number;
  constructor(private _peliculasService:PeliculasService) { }

  async ngOnInit() {
    let actores:Actor[] = await this._peliculasService.getActores(this._peliculasService.peliculaActual.id);
    this.numActores = actores.length;
  }
}
