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

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
    public disconnect: boolean = false;
    public notifications: any;
    public notification;
    public notificationList:any;
    public projects: any;
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
            this.selectbd();
            this.getNotifications();
        })
  }

    ionViewWillEnter(){
       this.storage.get('notificationsAlertInternet').then( (ignore_alert) => {
         if( ignore_alert !== true ){
           let alert = this.alertCtrl.create({enableBackdropDismiss: false});
           this.helper.showAlertInternetRequired(alert, 'notificationsAlertInternet').then( (val) => {
             if( val === false ){
               alert.dismiss();
               this.navCtrl.pop();
             }else{
               this.loader = this.loading.create({
                 content: 'Actualizando Notificaciones',
               });
               this.loader.present().then(() => {
                 if(this.getNotifications() == 0){
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
             if(this.getNotifications() == 0){
               this.loader.dismiss();
             }
           });
         }
       });
    }

  openNotification(title,body,bigPicture,subtitle,idnotification){
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql('SELECT * FROM newNotifications WHERE _id = ?', [idnotification])
            .then((data) => {
                if(data.rows.length == 0){
                     db.executeSql('INSERT INTO newNotifications(_id) VALUES (?)', [idnotification])
                     .then(() => console.log("Execute SQL"))
                     .catch(e => console.log(e));
                }
            })
            .catch(e =>  console.log(e));
        })
        .catch(e => console.log(e));

      this.notification = {
        "title": title,
        "body" : body,
        "bigPicture": bigPicture
    }

      this.navCtrl.push(NotificationsDetailsPage, {
        "notification": this.notification
    });
  }

  selectbd(){
      var notificationList = [];
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql('SELECT * FROM newNotifications',[])
            .then((data) => {
              let rows = data.rows;
              for(let i = 0; i < rows.length; i++)
              {
                notificationList.push({
                  _id: rows.item(i)._id,
                  /*title: rows.item(i).title,
                  subtitle: rows.item(i).subtitle,
                  body: rows.item(i).body,
                  largeIcon: rows.item(i).largeIcon,
                  bigPicture: rows.item(i).bigPicture,
                  status: rows.item(i).status*/
                  });
              }
              //this.notifications = notificationList;
              this.notificationList = notificationList;
            })
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
  }

  getNotifications() : any{
    this.observableVar = Subscription;
    this.selectbd();
    this.remoteService.getApiNotifications()
    .then(data => {
      this.notifications = data;
    for(var noti of this.notifications){
      for(var notiList of this.notificationList){
        if( noti._id == notiList._id ){
          noti.show = "false";
          }
         }
        }
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
