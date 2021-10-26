import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/interface';
import { ComponentesService } from '../../services/componentes.service';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  public misComponentes: Componente[] = [];
  constructor(private _componentesService:ComponentesService, private _mensajesServices:MensajesService) { }

  async ngOnInit() {
    
    await this._mensajesServices.muestraLoading().then(async () => {
      try{
        this.misComponentes = await this._componentesService.getComponentes();
        let filtrados = this.misComponentes.filter(data => {
          return data.color =='warning';
        })
        console.log(filtrados);
      }catch(error){
        this._mensajesServices.muestraMensaje("Error al cargar");
      }
      finally{
        this._mensajesServices.ocultaLoading();
      }
    });
  }
}
