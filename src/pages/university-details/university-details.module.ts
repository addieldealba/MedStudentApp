import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UniversityDetailsPage } from './university-details';

@NgModule({
  declarations: [
    UniversityDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UniversityDetailsPage),
  ],
})
export class UniversityDetailsPageModule {}
