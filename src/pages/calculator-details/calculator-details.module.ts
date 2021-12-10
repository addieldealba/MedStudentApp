import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculatorDetailsPage } from './calculator-details';

@NgModule({
  declarations: [
    CalculatorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculatorDetailsPage),
  ],
})
export class CalculatorDetailsPageModule {}
