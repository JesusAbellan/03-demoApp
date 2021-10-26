import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor(private _http:HttpClient) { }

  public getComponentes(){
    return new Promise<Componente[]>((resolve,reject) =>{
      const url = '../assets/json/componentes.json';
      this._http.get<Componente[]>(url).subscribe(resp =>{
        resolve(resp);
      },err =>{
        reject(err);
      });
    })
  }
}
