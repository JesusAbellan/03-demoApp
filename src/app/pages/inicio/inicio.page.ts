import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/interface';
import { ComponentesService } from '../../services/componentes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  public misComponentes: Componente[] = [];
  constructor(private _componentesService:ComponentesService) { }

  async ngOnInit() {
    this.misComponentes = await this._componentesService.getComponentes();
  }

}
