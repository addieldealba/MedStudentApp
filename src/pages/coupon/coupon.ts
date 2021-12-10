import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'
import { AlertController, LoadingController} from 'ionic-angular';
import { Network } from '@ionic-native/network';
import {Observable} from 'rxjs/Rx';
import { Subscription } from "rxjs/Subscription";
import { NotificationsDetailsPage } from '../notifications-details/notifications-details';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { Storage } from '@ionic/storage';
import { HelperProvider } from '../../providers/helper/helper';
import { CouponDetailsPage } from '../coupon-details/coupon-details';

@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html'
})
export class CouponPage {
    public coupons: any;
    public coupon;
    //public notificationList:any;
    public observableVar: any;
    public loader:any;

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public sqlite: SQLite,
      public alertCtrl: AlertController,
      public network:Network,
      public remoteService : RemoteServiceProvider,
      public storage: Storage,
      public helper: HelperProvider,
      public loading: LoadingController) {

          this.observableVar = Subscription;
          this.observableVar = Observable.interval(5000).subscribe(()=>{
              this.getCoupons();
          })
    }

    ionViewWillEnter(){
       this.storage.get('couponsAlertInternet').then( (ignore_alert) => {
         if( ignore_alert !== true ){
           let alert = this.alertCtrl.create({enableBackdropDismiss: false});
           this.helper.showAlertInternetRequired(alert, 'couponsAlertInternet').then( (val) => {
             if( val === false ){
               alert.dismiss();
               this.navCtrl.pop();
             }else{
               this.loader = this.loading.create({
                 content: 'Actualizando Notificaciones',
               });
               this.loader.present().then(() => {
                 if(this.getCoupons() == 0){
                   this.loader.dismiss();
                 }
               });
             }
           });
         }else{
           this.loader = this.loading.create({
             content: 'Actualizando Notificaciones',
           });
           this.loader.present().then(() => {
             if(this.getCoupons() == 0){
               this.loader.dismiss();
             }
           });
         }
       });
    }

  openCoupon(title,body,bigPicture) : any{
      var coupon = {
        "title": title,
        "body" : body,
        "bigPicture": bigPicture
    }
      this.navCtrl.push(CouponDetailsPage, {
        "coupon": coupon
    });
  }

  getCoupons() : any{
    this.observableVar = Subscription;
    this.remoteService.getApiCoupons()
    .then(data => {
      this.coupons = data;
        return 1;
    });
    this.loader.dismiss();
  }

  messageInfo(message) {
  let alert = this.alertCtrl.create({
    title: 'sql',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
  }
}
