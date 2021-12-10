import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-coupon-details',
  templateUrl: 'coupon-details.html',
})
export class CouponDetailsPage {
    public coupon;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.coupon = navParams.get("coupon");
  }

  ionViewDidLoad() {
  }

}
