import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { HelperProvider } from '../../providers/helper/helper';
import { ProjectDetailsPage } from '../project-details/project-details';
import {Observable} from 'rxjs/Rx';
import { Subscription } from "rxjs/Subscription";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'
import { AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  public selectedValue: any;
  public projects: any;
  public listVotes: any;
  public userInf: any;
  public observableVar: any;
  public tests:any;
  public loader: any;
  public showP: any;
  public details: any;
  show;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public remoteService : RemoteServiceProvider,
    public sqlite: SQLite,
    private storage: Storage,
    private helper: HelperProvider,
    public alertCtrl: AlertController,
    public loading: LoadingController) {
  }

  ionViewDidLoad(){
    this.storage.get('projectAlertInternet').then( (ignore_alert) => {
      if( ignore_alert !== true ){
        let alert = this.alertCtrl.create({enableBackdropDismiss: false});
        this.helper.showAlertInternetRequired(alert, 'projectAlertInternet').then( (val) => {
          if( val === false ){
            alert.dismiss();
            this.navCtrl.pop();
          }else{
            this.loader = this.loading.create({
              content: 'Actualizando proyectos',
            });
            this.loader.present().then(() => {
              if(this.getProjects() == 0){
                this.loader.dismiss();
              }
            });
          }
        });
      }else{
        this.loader = this.loading.create({
          content: 'Actualizando proyectos',
        });
        this.loader.present().then(() => {
          if(this.getProjects() == 0){
            this.loader.dismiss();
          }
        });
      }
    });
  }

  ionViewDidLeave(){
      this.observableVar.unsubscribe();
  }

  getProjects() : any{
    this.observableVar = Subscription;
    this.selectbd();
    this.remoteService.getApiProjects()
    .then(data => {
      this.projects = data;
    for(var project of this.projects){
      for(var vote of this.listVotes){
        if( project._id == vote._id ){
          //project.project.show = "false";
          project.show = "false";
          }
          }
        }
    });

    this.observableVar = Observable.interval(15000).subscribe(()=>{
      this.selectbd();
      this.remoteService.getApiProjects()
      .then(data => {
        this.projects = data;
        for(var project of this.projects){
          for(var vote of this.listVotes){
            if( project._id == vote._id ){
                //project.project.show = "false";
                 project.show = "false";
              }
          }
        }

      });
  });
    this.loader.dismiss();
  }

  refresh(){
    this.observableVar = Subscription;
    this.selectbd();
    this.remoteService.getApiProjects()
    .then(data => {
      this.projects = data;
    for(var project of this.projects){
      for(var vote of this.listVotes){
        if( project._id == vote._id ){
            //project.project.show = "false";
             project.show = "false";
          }
      }
    }

    });
  }

  openDetails(id){
    var data;
    for(let project of this.projects) {
      if( project._id == id ){
        data = project;
      }
    }

    this.navCtrl.push(ProjectDetailsPage, {
      "project": data
    });
  }

  vote(pro){
    this.observableVar = Subscription;
    this.observableVar = Observable.interval(250).subscribe(()=>{
      this.refresh();
      this.observableVar.unsubscribe();
    });
    this.remoteService.postProjectVote(pro);
    this.insertVote(pro);
  }

  selectbd(){
      var voteList = [];
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql('SELECT * FROM votes',[])
            .then((data) => {
              let rows = data.rows;
              for(let i = 0; i < rows.length; i++)
              {
                voteList.push({
                  _id: rows.item(i)._id
                  });
              }
              this.listVotes = voteList;
            })
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));

  }

  insertVote(pro){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO votes(_id) VALUES (?)', [pro])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
}
