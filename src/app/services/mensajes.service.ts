import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(public toastController:ToastController, public loadingController:LoadingController) { }

  async muestraMensaje(mensaje:string,tiempo?:number){
    let t = tiempo? tiempo: 2000;
    const toast = await this.toastController.create({
      message:mensaje,
      duration:t
    })

   toast.present();
  }

  async muestraLoading(mensaje:string, tiempo?:number){
    const loading = await this.loadingController.create({
      message: mensaje,
      duration: tiempo
    });
    await loading.present();
  }
  async ocultaLoading(){
    await this.loadingController.dismiss();
  }
}
