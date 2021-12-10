import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsDetailsPage } from './notifications-details';

@NgModule({
  declarations: [
    NotificationsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsDetailsPage),
  ],
})
export class NotificationsDetailsPageModule {}
