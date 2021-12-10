import { Component } from "@angular/core";
import { NavController, Platform } from "ionic-angular";
import { MapPage } from "../map/map";
import { UniversityPage } from "../university/university";
import { MenuPage } from "../menu/menu";
import { CalculatorPage } from "../calculator/calculator";
import { NotificationsPage } from "../notifications/notifications";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { AlertController } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";
import { RemoteServiceProvider } from "../../providers/remote-service/remote-service";
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';



@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public count = 0;
  public countFake = 0;
  public observableVar: any;
  public notifications: any;

  tab1Root = MenuPage;
  tab2Root = MapPage;
  tab3Root = UniversityPage;
  tab4Root = CalculatorPage;
  tab5Root = NotificationsPage;

  constructor(
    public navCtrl: NavController,
    public sqlite: SQLite,
    public alertCtrl: AlertController,
    public remoteService: RemoteServiceProvider,
    public platform: Platform,
    private admobFree: AdMobFree,
    private screenOrientation: ScreenOrientation
    ) {

    

    this.selectbdNewNotifications();
    this.observableVar = Subscription;
    this.observableVar = Observable.interval(5000).subscribe(() => {
      this.selectbdNewNotifications();
      this.getNotifications();
    });
    
    // Showing Banner Ads
    if (platform.is('android')) {
      this.showBannerAndroid();
    } else {
      this.showBannerIOS();
    }
  
  }



    AllowToRotate(){
    this.screenOrientation.unlock();
    }

    ionViewDidEnter(){
      // this.AllowToRotate();
    }


  //Showing Banner Ads
  showBannerAndroid() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config

     id: 'ca-app-pub-4789040023057219/6775389936',

      isTesting: false,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
  }


  showBannerIOS() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config

      id: 'ca-app-pub-4789040023057219/7848249714',

      isTesting: false,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
  }


  getNotifications(): any {
    this.observableVar = Subscription;
    this.remoteService.getApiNotifications().then(data => {
      this.notifications = data;
      this.countFake = this.notifications.length;
    });
  }

  selectbd() {
    this.count = 0;
    this.sqlite
      .create({
        name: "data.db",
        location: "default"
      })
      .then((db: SQLiteObject) => {
        db.executeSql("SELECT * FROM notifications", [])
          .then(data => {
            /*let rows = data.rows;
              for(let i = 0; i < rows.length; i++)
              {
                if(rows.item(i).status == 0)
                {
                  this.count = this.count + 1;
              }

          }*/
          })
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

  selectbdNewNotifications() {
  
    this.platform.ready().then(() => {


      this.sqlite
      .create({
        name: "data.db",
        location: "default"
      })
      .then((db: SQLiteObject) => {
        db.executeSql("SELECT * FROM newNotifications", [])
          .then(data => {
            let rows = data.rows;
            
            this.count = this.countFake - rows.length;
          
            if (this.count < 0) {
              this.count = 0;
            }
          })
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));

    });
    
  }

  updatebdNewNotifications() {
    this.sqlite
      .create({
        name: "data.db",
        location: "default"
      })
      .then((db: SQLiteObject) => {
        db.executeSql("UPDATE newNotifications SET status = ? ", ["false"])
          .then(() => console.log("succes"))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

  messageInfo(message) {
    let alert = this.alertCtrl.create({
      title: "message",
      subTitle: message,
      buttons: ["OK"]
    });
    alert.present();
  }
}
