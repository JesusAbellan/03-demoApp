import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild('miInifiniteScroll') infinite:IonInfiniteScroll;
  datos = Array(20);
  constructor() { }

  ngOnInit() {
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
