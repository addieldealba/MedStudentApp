import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlosarioDetailsContentPage } from './glosario-details-content';

@NgModule({
  declarations: [
    GlosarioDetailsContentPage,
  ],
  imports: [
    IonicPageModule.forChild(GlosarioDetailsContentPage),
  ],
})
export class GlosarioDetailsContentPageModule {}
