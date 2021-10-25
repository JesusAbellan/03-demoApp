import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  @ViewChild('miRefresher') refresher:IonRefresher;
  @ViewChild('miInifiniteScroll') infinite:IonInfiniteScroll;
  public datos = Array(20);
  constructor(private _mensajeService:MensajesService) { }

  ngOnInit() {
  }

  onClick(){
    this._mensajeService.muestraMensaje("Usuarios Cargados");
  }

  refrescar(){
    setTimeout(() =>{
      let nuevosDatos = Array(10);
      this.datos.push(...nuevosDatos);
      this.refresher.complete();
    },1500);
  }

  loadData(){
    setTimeout(() => {
      if(this.datos.length>70){
        this.infinite.complete();
        this.infinite.disabled = true;
        return;
      }
      let nuevosDatos = Array(10);
      this.datos.push(...nuevosDatos);
      this.infinite.complete();
    }, 1500);
  }
}
