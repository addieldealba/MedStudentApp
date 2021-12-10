import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UniversityDetailsContentPage } from './university-details-content';

@NgModule({
  declarations: [
    UniversityDetailsContentPage,
  ],
  imports: [
    IonicPageModule.forChild(UniversityDetailsContentPage),
  ],
})
export class UniversityDetailsContentPageModule {}
