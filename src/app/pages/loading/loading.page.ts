import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {


  constructor(private _mensajeServices:MensajesService) { }

  ngOnInit() {
  }

  async recargar(){
    await this._mensajeServices.muestraLoading('Cargando...',1000);
  }
}
