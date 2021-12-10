import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notifications-details',
  templateUrl: 'notifications-details.html',
})
export class NotificationsDetailsPage {
    public notification;
  constructor(public navCtrl: NavController,
      public navParams: NavParams) {
      this.notification = navParams.get("notification");
  }

  ionViewDidLoad() {
  }

}
