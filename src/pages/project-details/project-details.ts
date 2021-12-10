import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html',
})
export class ProjectDetailsPage {

  public project;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project = navParams.get("project");
  }
}
