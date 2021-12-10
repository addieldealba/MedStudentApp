import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { WikiDetailsPage } from '../wiki-details/wiki-details';

@IonicPage()
@Component({
  selector: 'page-wiki',
  templateUrl: 'wiki.html',
})
export class WikiPage {

  public selectedValue: any;
  public wikis: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public remoteService : RemoteServiceProvider) {
    this.getWikis();
  }

  getWikis(){
    this.remoteService.getApiWikis()
    .then(data => {
      this.wikis = data;
    });
  }

  openDetails(id){
    var data;
    for(let wiki of this.wikis) {
      if( wiki._id == id ){
        data = wiki;
      }
    }
    this.navCtrl.push(WikiDetailsPage, {
      "wiki": data
    });
  }
}
