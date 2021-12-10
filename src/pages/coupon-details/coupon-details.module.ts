import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouponDetailsPage } from './coupon-details';

@NgModule({
  declarations: [
    CouponDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CouponDetailsPage),
  ],
})
export class CouponDetailsPageModule {}
