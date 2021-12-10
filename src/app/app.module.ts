import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Push } from "@ionic-native/push";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { IonicStorageModule } from "@ionic/storage";
import { AdMobFree } from '@ionic-native/admob-free';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { MyApp } from "./app.component";
import { MapPage } from "../pages/map/map";
import { MenuPage } from "../pages/menu/menu";
import { CouponPage } from "../pages/coupon/coupon";
import { HomePage } from "../pages/home/home";
import { CalculatorPage } from "../pages/calculator/calculator";
import { LoginPage } from "../pages/login/login";

import { ContactPage } from "../pages/contact/contact";
import { ProjectsPage } from "../pages/projects/projects";
import { UniversityPage } from "../pages/university/university";
import { GlosarioPage } from "../pages/glosario/glosario"
import { WikiPage } from "../pages/wiki/wiki";

import { UniversityDetailsPage } from "../pages/university-details/university-details";
import { GlosarioDetailsPage } from "../pages/glosario-details/glosario-details";
import { WikiDetailsPage } from "../pages/wiki-details/wiki-details";
import { ProjectDetailsPage } from "../pages/project-details/project-details";
import { CalculatorDetailsPage } from "../pages/calculator-details/calculator-details";

import { MaintenanceModalPage } from "../pages/maintenance-modal/maintenance-modal";
import { RemoteServiceProvider } from "../providers/remote-service/remote-service";

import { HttpModule } from "@angular/http";
import { Geolocation } from "@ionic-native/geolocation";

import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { UniversityDetailsContentPage } from "../pages/university-details-content/university-details-content";
import { GlosarioDetailsContentPage } from "../pages/glosario-details-content/glosario-details-content";
import { Facebook } from "@ionic-native/facebook";
import { NotificationsPage } from "../pages/notifications/notifications";
import { OneSignal } from "@ionic-native/onesignal";
import { Network } from "@ionic-native/network";
import { NotificationsDetailsPage } from "../pages/notifications-details/notifications-details";
import { BackgroundMode } from "@ionic-native/background-mode";
import { Autostart } from "@ionic-native/autostart";
import { HelperProvider } from "../providers/helper/helper";
import { CouponDetailsPage } from "../pages/coupon-details/coupon-details";

import { File } from '@ionic-native/file';
import {FileOpener} from '@ionic-native/file-opener';
import {FileTransfer} from '@ionic-native/file-transfer';
import {DocumentViewer} from '@ionic-native/document-viewer';

import { DownloadsPage } from "../pages/downloads/downloads"
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    MenuPage,
    CouponPage,
    CalculatorPage,
    HomePage,
    ContactPage,
    ProjectsPage,
    UniversityPage,
    GlosarioPage,
    WikiPage,
    UniversityDetailsPage,
    GlosarioDetailsPage,
    WikiDetailsPage,
    ProjectDetailsPage,
    CalculatorDetailsPage,
    LoginPage,
    UniversityDetailsContentPage,
    GlosarioDetailsContentPage,
    MaintenanceModalPage,
    NotificationsPage,
    NotificationsDetailsPage,
    CouponDetailsPage,
    DownloadsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: false
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    MenuPage,
    CouponPage,
    CalculatorPage,
    HomePage,
    ContactPage,
    ProjectsPage,
    UniversityPage,
    GlosarioPage,
    WikiPage,
    UniversityDetailsPage,
    GlosarioDetailsPage,
    WikiDetailsPage,
    ProjectDetailsPage,
    CalculatorDetailsPage,
    LoginPage,
    UniversityDetailsContentPage,
    GlosarioDetailsContentPage,
    MaintenanceModalPage,
    NotificationsPage,
    NotificationsDetailsPage,
    CouponDetailsPage,
    DownloadsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    SQLite,
    Facebook,
    OneSignal,
    Network,
    InAppBrowser,
    BackgroundMode,
    AdMobFree,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RemoteServiceProvider,
    HelperProvider,
    Autostart,
    ScreenOrientation,
    File,
    FileOpener,
    FileTransfer,
    DocumentViewer,
    HTTP
  ]
})
export class AppModule { }
