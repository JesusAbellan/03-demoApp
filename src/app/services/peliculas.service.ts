import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResultadoPeliculas, Pelicula } from '../interfaces/peliculas';
import { ResultadoActores, Actor } from '../interfaces/actores';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private _http:HttpClient) { }

  public peliculaActual:Pelicula;

  getPeliculasPorGenero(id:string, page:number){
    const cadena = `${environment.api}${id}&page=${page}`;
    return new Promise<Pelicula[]>((resolve,reject) => {
      this._http.get<ResultadoPeliculas>(cadena).subscribe(resp =>{
        if(resp.results.length==0){
          reject(new Error('Error recogiendo los datos'));
        }
        resolve(resp.results);
      },err =>{
        reject(err);
      })
    })
  }
  getActores(id:number){
    const cadena = `${environment.actores}${id}/casts?api_key=8a8a7199fb356a93aacfb10f93061863`;
    return new Promise<Actor[]>((resolve,reject) => {
      this._http.get<ResultadoActores>(cadena).subscribe(resp =>{
        if(resp.cast.length==0){
          reject(new Error('Error recogiendo los datos'));
        }
        resolve(resp.cast);
      },err =>{
        reject(err);
      })
    })
  }
}
