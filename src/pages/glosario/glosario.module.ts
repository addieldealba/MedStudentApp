import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlosarioPage } from './glosario';

@NgModule({
  declarations: [
    GlosarioPage,
  ],
  imports: [
    IonicPageModule.forChild(GlosarioPage),
  ],
})
export class GlosarioPageModule {}
