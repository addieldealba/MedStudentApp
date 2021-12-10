import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UniversityDetailsContentPage} from '../university-details-content/university-details-content';

@IonicPage()
@Component({
  selector: 'page-university-details',
  templateUrl: 'university-details.html',
})
export class UniversityDetailsPage {

  public lesson;
  public resources;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lesson = navParams.get("lesson");
    this.resources = null;
  }

  cardClicked(lessonTitle, chapter, name, video, pdf){
    this.resources = {
      "lessonTitle" : lessonTitle,
      "chapter": chapter,
      "name": name,
      "video" : video,
      "pdf": pdf
    };

    this.navCtrl.push(UniversityDetailsContentPage, {
      "resources": this.resources
    })
  }
}
