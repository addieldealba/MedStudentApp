import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { HelperProvider } from '../../providers/helper/helper';
import { GlosarioDetailsPage } from '../glosario-details/glosario-details';
import { Network } from '@ionic-native/network';
import { AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-glosario',
  templateUrl: 'glosario.html',
})
export class GlosarioPage {

  public selectedValue: any;
  public reviews: any;
  public disconnect: boolean = false;
  public loader: any;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public remoteService: RemoteServiceProvider,
      public network: Network,
      private helper: HelperProvider,
      private storage: Storage,
      public alertCtrl: AlertController,
      public loading: LoadingController) {
  }

ionViewWillEnter(){
    this.storage.get('universityAlertInternet').then( (ignore_alert) => {
      if( ignore_alert !== true ){
        let alert = this.alertCtrl.create({enableBackdropDismiss: false});
        this.helper.showAlertInternetRequired(alert, 'universityAlertInternet').then( (val) => {
          if( val === false ){
            alert.dismiss();
            this.navCtrl.pop();
          }else{
            this.loader = this.loading.create({
              content: 'Actualizando repasos',
            });
            this.loader.present().then(() => {
              if(this.getReviews() == 0){
                this.loader.dismiss();
              }
            });
          }
        });
      }else{
        this.loader = this.loading.create({
          content: 'Actualizando repasos',
        });
        this.loader.present().then(() => {
          if(this.getReviews() == 0){
            this.loader.dismiss();
          }
        });
      }
    });
}

  ionViewDidLoad(){
  }

  public showAlert(title, sub):void {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: sub,
      buttons: ['Ok']
    });
    alert.present();
  }

  private getReviews(): any{
    this.remoteService.getApiReviews().then((data) => {
      this.reviews = data;
      return 1;
    });
    this.loader.dismiss();
  }

  private openDetails(id): void{
    var data;
    for(let review of this.reviews) {
      if( review._id == id ){
        data = review;
      }
    }
    this.navCtrl.push(GlosarioDetailsPage, {
      "review": data
    });
  }
}
