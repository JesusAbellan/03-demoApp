import { Component, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from './interfaces/interface';
import { ComponentesService } from './services/componentes.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _componentesService: ComponentesService) {}

  @ViewChild('miMenu') miMenu:MenuController
  componentes:Componente[] = [];
  async ngOnInit(){
    this.componentes = await this._componentesService.getComponentes();
  }
}
