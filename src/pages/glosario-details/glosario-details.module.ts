import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlosarioDetailsPage } from './glosario-details';

@NgModule({
  declarations: [
    GlosarioDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GlosarioDetailsPage),
  ],
})
export class GlosarioDetailsPageModule {}
