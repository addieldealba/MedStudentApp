import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wiki-details',
  templateUrl: 'wiki-details.html',
})
export class WikiDetailsPage {

  public wiki;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wiki = navParams.get("wiki");
  }
}
