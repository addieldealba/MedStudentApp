import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WikiPage } from './wiki';

@NgModule({
  declarations: [
    WikiPage,
  ],
  imports: [
    IonicPageModule.forChild(WikiPage),
  ],
})
export class WikiPageModule {}
