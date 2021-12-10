import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlosarioDetailsContentPage} from '../glosario-details-content/glosario-details-content';

@IonicPage()
@Component({
  selector: 'page-glosario-details',
  templateUrl: 'glosario-details.html',
})
export class GlosarioDetailsPage {

  public review;
  public resources;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.review = navParams.get("review");
    this.resources = null;
  }

  cardClicked(lessonTitle,chapter, name, video, pdf){
    this.resources = {
      "lessonTitle" : lessonTitle,
      "chapter": chapter,
      "name": name,
      "video" : video,
      "pdf": pdf
    };

    this.navCtrl.push(GlosarioDetailsContentPage, {
      "resources": this.resources
    })
  }
}
