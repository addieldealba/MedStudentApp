import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintenanceModalPage } from './maintenance-modal';

@NgModule({
  declarations: [
    MaintenanceModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MaintenanceModalPage),
  ],
})
export class MaintenanceModalPageModule {}
