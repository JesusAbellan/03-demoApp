import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Boton } from '../../interfaces/interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController:AlertController) { }
  botones : Boton[] = [
    {
      nombre: "Alerta Simple",
      numero: 1,
      color: "amarillorubio"
    },
    {
      nombre: "Alert Multiple",
      numero: 2,
      color: "secondary"
    },
    {
      nombre: "Confirmar",
      numero: 3,
      color: "tertiary"
    },
    {
      nombre: "Formulario",
      numero: 4,
      color: "success"
    },
    {
      nombre: "Radio",
      numero: 5,
      color: "warning"
    },
    {
      nombre: "CheckBox",
      numero: 6,
      color: "danger"
    }
  ];
  ngOnInit() {
  }

  onClick(numero){
    switch(numero){
      case 1:
        this.presentAlert();
        break;
      case 2:
        this.presentAlertMultipleButtons();
        break;
      case 3:
        this.presentAlertConfirm();
        break;
      case 4:
        this.presentAlertPrompt();
        break;
      case 5:
        this.presentAlertRadio();
        break;
      case 6:
        this.presentAlertCheckbox();
        break;
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta Simple',
      subHeader: 'Chiquetita',
      message: 'Mensaje de alerta simple',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alerta Múltiple',
      subHeader: 'Grandecita',
      message: 'Mensaje de alerta múltiple',
      buttons: ['Cancelar', 'Abrir Modal', 'Borrar']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Confirmar!',
      message: '¿¡Quieres <strong>confirmar</strong>!?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Introducir Nombre'
        },
        {
          name: 'apellidos',
          type: 'text',
          id: 'apellidos',
          placeholder: 'Introducir Apellidos'
        },
        {
          name: 'fecha',
          id: 'fecha',
          type: 'date',
          placeholder: 'dd/mm/aaaa'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert Radio',
      inputs: [
        {
          name: 'maldia',
          type: 'radio',
          label: 'Mal día',
          value: 'maldia',
          handler: (data) => {
            console.log(data);
          },
          checked: true
        },
        {
          name: 'normaldia',
          type: 'radio',
          label: 'Día normal',
          value: 'normaldia',
          handler: (data) => {
            console.log(data);
          },
          checked: false
        },
        {
          name: 'buendia',
          type: 'radio',
          label: 'Buen día',
          value: 'buendia',
          handler: (data) => {
            console.log(data);
          },
          checked: false
        }  
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'quierounpony',
          type: 'checkbox',
          label: 'Quiero un pony',
          value: 'quierounpony',
          handler: (data) => {
            console.log(data);
          },
          checked: true
        },

        {
          name: 'quierounlagarto',
          type: 'checkbox',
          label: 'Quiero un lagarto',
          value: 'quierounlagarto',
          handler: (data) => {
            console.log(data);
          }
        },

        {
          name: 'quierounhuron',
          type: 'checkbox',
          label: 'Quiero un hurón',
          value: 'quierounhuron',
          handler: (data) => {
            console.log(data);
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
