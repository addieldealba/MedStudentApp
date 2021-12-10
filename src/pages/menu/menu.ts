import { Component } from "@angular/core";
import { ModalController, NavController, Platform } from "ionic-angular";

import { MapPage } from "../map/map";
import { CouponPage } from "../coupon/coupon";
import { ProjectsPage } from "../projects/projects";
import { UniversityPage } from "../university/university";
import { WikiPage } from "../wiki/wiki";
import { GlosarioPage } from "../glosario/glosario";
import { CalculatorPage } from "../calculator/calculator";
import { MaintenanceModalPage } from "../maintenance-modal/maintenance-modal";

import { IonicPage, NavParams, Config } from "ionic-angular";
import { HomePage } from "../../pages/home/home";
import { LoginPage } from "../../pages/login/login";
import { AlertController, App } from "ionic-angular";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

import { DownloadsPage} from "../downloads/downloads";

@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {

  public version : any;

  mapPage = MapPage;
  couponPage = CouponPage;
  projectsPage = ProjectsPage;
  universityPage = UniversityPage;
  wikiPage = WikiPage;
  glosarioPage = GlosarioPage;
  calculatorPage = CalculatorPage;
  downloadsPage =  DownloadsPage;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sqlite: SQLite,
    public config: Config,
    public appCtrl: App,
    public modalCtrl: ModalController,
    public platform: Platform
  ) {

    // Set Version Number
    if(platform.is('android')){
      // Version Number for Android
      this.version = 'v4.9.0';
    }else{
      // Version Number for IOS
      this.version = 'v4.9.0'
    } 


  }

  openModal() {
    let maintenanceModal = this.modalCtrl.create(MaintenanceModalPage);
    maintenanceModal.present();
  }

  closeSessionAlert() {
    let confirm = this.alertCtrl.create({
      title: "¿Quiere cerrar la sesión?",
      buttons: [
        {
          text: "Cancelar",
          handler: () => {}
        },
        {
          text: "Aceptar",
          handler: () => {
            this.close();
            this.appCtrl.getRootNav().setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

  close() {
    this.sqlite
      .create({
        name: "data.db",
        location: "default"
      })
      .then((db: SQLiteObject) => {
        db.executeSql("UPDATE user SET status = ?", [0])
          .then(() => console.log("Executed SQL"))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
}
