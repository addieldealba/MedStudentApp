import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  public data = {
    name: "",
    email: "",
    message: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    public remoteService : RemoteServiceProvider, public toastCtrl: ToastController) {
  }

  formOnSubmit(){
    var validations = {
      text: /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/,
      email:  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
    var success = true;
    var errors = "";
    if( this.data.name ){
      if( !validations.text.test(this.data.name) ){
        errors += "<p>Nombre: No es un nombre válido.</p>" ;
        success = false;
      }
    }else{
      errors += "<p>Nombre: El nombre no puede estar vacío.</p>"
      success = false;
    }

    if(this.data.email){
      if( !validations.email.test(this.data.email.toLowerCase()) ){
        errors += "<p>Correo: No es un correo válido.</p>";
        success = false;
      }
    }else{
      errors += "<p>Correo: El correo no puede estar vacío.</p>";
      success = false;
    }

    if(this.data.message){

    }else{
      errors += "<p>Mensaje: El mensaje no puede estar vacío.</p>";
      success = false;
    }
    if(success){
      this.remoteService.postApiContact(this.data.name, this.data.email, this.data.message).then( (response) => {
        if( response.status == 200 ){
          this.showAlert("Formulario enviado", "¡Gracias por tus opiniones!");
        }else{
          this.showAlert("Error", "Ha ocurrido un error, por favor inténtelo más tarde");
          console.log(response);
        }
      });
    }else{
      this.showAlert("Error", errors);
    }
  }

  showAlert(title, sub) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: sub,
      buttons: ['Ok']
    });
    alert.present();
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
  }

}
