import { Injectable } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class HelperProvider {

  constructor(
    private storage: Storage) {
  }

  public showAlertInternetRequired(alert, storage_string: string): Promise<boolean>{
    return new Promise( (resolve, reject) => {
      alert.setTitle('Este módulo hará uso de tu conexión a internet');

      alert.addInput({
          type: 'checkbox',
          label: 'No volver a mostrar',
          value: true,
          checked: false
      });
      alert.addButton({
        text: 'Regresar',
        handler: () => {
            resolve(false);
            return false;
        }
      });
      alert.addButton({
        text: 'Aceptar',
        handler: (data: any) => {
          if( data[0] === true ){
            this.storage.set(storage_string, true);
          }
          resolve(true);
          return true;
        }
      });
      alert.present();
    });
  }
}
