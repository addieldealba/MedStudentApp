import { Component, ViewChild } from "@angular/core";
import { App, Platform, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { UniversityDetailsContentPage } from "../pages/university-details-content/university-details-content";
import { GlosarioDetailsContentPage } from "../pages/glosario-details-content/glosario-details-content";
import { NotificationsPage } from "../pages/notifications/notifications";
import { OneSignal } from "@ionic-native/onesignal";
import { ToastController } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";
import { Storage } from "@ionic/storage";

@Component({
    templateUrl: "app.html"
})
export class MyApp {
    //rootPage:any = HomePage;
    //rootPage:any = LoginPage;
    rootPage: any;
    public observableVar: any;
    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        public sqlite: SQLite,
        public alertCtrl: AlertController,
        public oneSignal: OneSignal,
        public toastCtrl: ToastController,
        public storage: Storage
    ) {
        //let self = this;
        //self.rootPage = LoginPage;
        // self.rootPage = HomePage;

        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            this.createDatabase();

            //  if (platform.is('android')) {
            //   this.storage.get('userStatus').then((status) =>{
            //     if(status == 1){
            //       this.rootPage = HomePage;
            //     }else{
            //       this.rootPage = LoginPage;
            //     }
            //   });
            // } 

            // else{
              this.rootPage = HomePage;
            // }

            //this.backgroundMode.enable();
            //this.backgroundMode.isScreenOff();
            //this.backgroundMode.wakeUp();
            //this.backgroundMode.unlock();
            //this.backgroundMode.excludeFromTaskList();
            //this.backgroundMode.disableWebViewOptimizations();
            /*this.backgroundMode.setDefaults({
                title:  'Servicio de Notificaciones',
                text:   'Ejecutando Servicio.',
        		silent: true,
                resume: true
                });
     this.backgroundMode.configure({
               title:  'Servicio de Notificaciones',
               text:   'Ejecutando Servicio.',
               silent: true,
               resume: true
           });*/

            /*this.backgroundMode.on('activate', function () {
          this.backgroundMode.disableWebViewOptimizations();
      });*/

            this.oneSignal.startInit(
                "308d352a-90bf-483b-b7a4-c0039c70ef9a",
                "172327885709"
            );
            this.oneSignal.inFocusDisplaying(
                this.oneSignal.OSInFocusDisplayOption.Notification
            );
            this.oneSignal.setSubscription(true);
            this.oneSignal.handleNotificationReceived().subscribe(jsonData => {
                /*let title =JSON.stringify(jsonData.payload.title);
         let body = JSON.stringify(jsonData.payload.body);
         let lIcon = JSON.stringify(jsonData.payload.largeIcon);
         let bPicture = JSON.stringify(jsonData.payload.bigPicture);

         let subtitle = body;
         let subtitl = subtitle.split("|");
         subtitl[0] = subtitl[0].replace(/["']/g, "");

         let titl = title.replace(/["']/g, "");
         let bod = subtitl[1].replace(/["']/g, "");
         let lIco = lIcon.replace(/["']/g, "");
         let bPictur = bPicture.replace(/["']/g, "");

         this.sqlite.create({
           name: 'data.db',
           location: 'default'
         })
           .then((db: SQLiteObject) => {

               db.executeSql('CREATE TABLE IF NOT EXISTS notifications(title VARCHAR(255),body VARCHAR(255),largeIcon VARCHAR(255),bigPicture VARCHAR(255),status INT(9),subtitle VARCHAR(255))', [])
                 .then(() => {
                     console.log('Executed SQL')
                     db.executeSql('SELECT * FROM notifications WHERE title = ? and body = ? and subtitle = ?', [titl,bod,subtitl[0]])
                       .then((data) => {
                         let rows = data.rows;

                         if(rows.length == "")
                         {
                               db.executeSql('INSERT INTO notifications(title,body,largeIcon,bigPicture,status,subtitle) VALUES (?,?,?,?,?,?)', [titl,bod,lIco,bPictur,0,subtitl[0]])
                                 .then(() =>  console.log('Executed SQL'))
                                 .catch(e =>  console.log(e));
                         }
                       })
                       .catch(e => console.log(e));
                 })
                 .catch(e => console.log(e));
           })
           .catch(e => console.log(e));*/
            });

            this.oneSignal.handleNotificationOpened().subscribe(jsonData => {
                //this.messageInfo(JSON.stringify(jsonData.notification.payload));
                /*let title =JSON.stringify(jsonData.notification.payload.title);
      let body = JSON.stringify(jsonData.notification.payload.body);
      let lIcon = JSON.stringify(jsonData.notification.payload.largeIcon);
      let bPicture = JSON.stringify(jsonData.notification.payload.bigPicture);

      let subtitle = body;
      let subtitl = subtitle.split("|")
      subtitl[0] = subtitl[0].replace(/["']/g, "");

      let titl = title.replace(/["']/g, "");
      let bod = subtitl[1].replace(/["']/g, "");
      let lIco = lIcon.replace(/["']/g, "");
      let bPictur = bPicture.replace(/["']/g, "");

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS notifications(title VARCHAR(255),body VARCHAR(255),largeIcon VARCHAR(255),bigPicture VARCHAR(255),status INT(9),subtitle VARCHAR(255))', [])
          .then(() => {
              console.log('Executed SQL')
              db.executeSql('SELECT * FROM notifications WHERE title = ? and body = ? and subtitle = ?', [titl,bod,subtitl[0]])
                .then((data) => {
                  let rows = data.rows;

                  if(rows.length == "")
                  {
                        db.executeSql('INSERT INTO notifications(title,body,largeIcon,bigPicture,status,subtitle) VALUES (?,?,?,?,?,?)', [titl,bod,lIco,bPictur,0,subtitl[0]])
                          .then(() =>  console.log('Executed SQL'))
                          .catch(e =>  console.log(e));
                  }
                  else
                  {
                      db.executeSql('UPDATE notifications SET status = ? WHERE title = ? and body = ?', [0,titl,bod])
                        .then(() =>  console.log("succes"))
                        .catch(e =>  console.log(e))
                  }
                })
                .catch(e => console.log(e));
          })
          .catch(e => console.log(e));

        })
        .catch(e => console.log(e));*/
            });

            this.oneSignal.endInit();
            //----------------------------------------------------------------------------
            /*  var sta;
        this.sqlite.create({
          name: 'data.db',
          location: 'default'
        })
          .then((db: SQLiteObject) => {
            db.executeSql('SELECT * FROM user',[])
              .then((data) => {
                let rows = data.rows;
                for(let i = 0; i < rows.length; i++)
                {
                  sta = rows.item(i).status;
                }

                if(sta == 1)
                {
                  self.rootPage = HomePage;
                }
                else
                {
                  self.rootPage = LoginPage
                }
              })
              .catch(e => this.messageInfo(e));
          })
          .catch(e => this.messageInfo("HOLA"));*/
            //----------------------------------------------------------------------
        });
        //----------------------------------------------------------------------
        /*platform.resume.subscribe(() => {
          this.oneSignal.startInit('308d352a-90bf-483b-b7a4-c0039c70ef9a', '172327885709');
          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
          this.oneSignal.setSubscription(true);

          this.oneSignal.handleNotificationReceived().subscribe(jsonData => {
               let title =JSON.stringify(jsonData.payload.title);
               let body = JSON.stringify(jsonData.payload.body);
               let lIcon = JSON.stringify(jsonData.payload.largeIcon);
               let bPicture = JSON.stringify(jsonData.payload.bigPicture);

               let subtitle = body;
               let subtitl = subtitle.split("|");
               subtitl[0] = subtitl[0].replace(/["']/g, "");

               let titl = title.replace(/["']/g, "");
               let bod = subtitl[1].replace(/["']/g, "");
               let lIco = lIcon.replace(/["']/g, "");
               let bPictur = bPicture.replace(/["']/g, "");

               this.sqlite.create({
                 name: 'data.db',
                 location: 'default'
               })
                 .then((db: SQLiteObject) => {

                     db.executeSql('CREATE TABLE IF NOT EXISTS notifications(title VARCHAR(255),body VARCHAR(255),largeIcon VARCHAR(255),bigPicture VARCHAR(255),status INT(9),subtitle VARCHAR(255))', [])
                       .then(() => {
                           console.log('Executed SQL')
                           db.executeSql('SELECT * FROM notifications WHERE title = ? and body = ? and subtitle = ?', [titl,bod,subtitl[0]])
                             .then((data) => {
                               let rows = data.rows;

                               if(rows.length == "")
                               {
                                     db.executeSql('INSERT INTO notifications(title,body,largeIcon,bigPicture,status,subtitle) VALUES (?,?,?,?,?,?)', [titl,bod,lIco,bPictur,0,subtitl[0]])
                                       .then(() =>  console.log('Executed SQL'))
                                       .catch(e =>  console.log(e));
                               }
                             })
                             .catch(e => console.log(e));
                       })
                       .catch(e => console.log(e));
                 })
                 .catch(e => console.log(e));
             });

          this.oneSignal.handleNotificationOpened().subscribe(jsonData => {
            let title =JSON.stringify(jsonData.notification.payload.title);
            let body = JSON.stringify(jsonData.notification.payload.body);
            let lIcon = JSON.stringify(jsonData.notification.payload.largeIcon);
            let bPicture = JSON.stringify(jsonData.notification.payload.bigPicture);

            let subtitle = body;
            let subtitl = subtitle.split("|");
            subtitl[0] = subtitl[0].replace(/["']/g, "");

            let titl = title.replace(/["']/g, "");
            let bod = subtitl[1].replace(/["']/g, "");
            let lIco = lIcon.replace(/["']/g, "");
            let bPictur = bPicture.replace(/["']/g, "");

            this.sqlite.create({
              name: 'data.db',
              location: 'default'
            })
              .then((db: SQLiteObject) => {
              db.executeSql('CREATE TABLE IF NOT EXISTS notifications(title VARCHAR(255),body VARCHAR(255),largeIcon VARCHAR(255),bigPicture VARCHAR(255),status INT(9),subtitle VARCHAR(255))', [])
                .then(() => {
                    console.log('Executed SQL')
                    db.executeSql('SELECT * FROM notifications WHERE title = ? and body = ? and subtitle = ?', [titl,bod,subtitl[0]])
                      .then((data) => {
                        let rows = data.rows;

                        if(rows.length == "")
                        {
                              db.executeSql('INSERT INTO notifications(title,body,largeIcon,bigPicture,status,subtitle) VALUES (?,?,?,?,?,?)', [titl,bod,lIco,bPictur,0,subtitl[0]])
                                .then(() =>  console.log('Executed SQL'))
                                .catch(e =>  console.log(e));
                        }
                        else
                        {
                            db.executeSql('UPDATE notifications SET status = ? WHERE title = ? and body = ?', [0,titl,bod])
                              .then(() =>  console.log("succes"))
                              .catch(e =>  console.log(e))
                        }
                      })
                      .catch(e => console.log(e));
                })
                .catch(e => console.log(e));

              })
              .catch(e => console.log(e));
          });

          this.oneSignal.endInit();
    });*/

        //----------------------------------------------------------------------

        /*platform.pause.subscribe(() => {
      this.oneSignal.startInit('308d352a-90bf-483b-b7a4-c0039c70ef9a', '172327885709');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.setSubscription(true);
      this.oneSignal.handleNotificationReceived().subscribe(jsonData => {
           let title =JSON.stringify(jsonData.payload.title);
           let body = JSON.stringify(jsonData.payload.body);
           let lIcon = JSON.stringify(jsonData.payload.largeIcon);
           let bPicture = JSON.stringify(jsonData.payload.bigPicture);

           let subtitle = body;
           let subtitl = subtitle.split("|");
           subtitl[0] = subtitl[0].replace(/["']/g, "");

           let titl = title.replace(/["']/g, "");
           let bod = subtitl[1].replace(/["']/g, "");
           let lIco = lIcon.replace(/["']/g, "");
           let bPictur = bPicture.replace(/["']/g, "");

           this.sqlite.create({
             name: 'data.db',
             location: 'default'
           })
             .then((db: SQLiteObject) => {

                 db.executeSql('CREATE TABLE IF NOT EXISTS notifications(title VARCHAR(255),body VARCHAR(255),largeIcon VARCHAR(255),bigPicture VARCHAR(255),status INT(9),subtitle VARCHAR(255))', [])
                   .then(() => {
                       console.log('Executed SQL')
                       db.executeSql('SELECT * FROM notifications WHERE title = ? and body = ? and subtitle = ?', [titl,bod,subtitl[0]])
                         .then((data) => {
                           let rows = data.rows;

                           if(rows.length == "")
                           {
                                 db.executeSql('INSERT INTO notifications(title,body,largeIcon,bigPicture,status,subtitle) VALUES (?,?,?,?,?,?)', [titl,bod,lIco,bPictur,0,subtitl[0]])
                                   .then(() =>  console.log('Executed SQL'))
                                   .catch(e =>  console.log(e));
                           }
                         })
                         .catch(e => console.log(e));
                   })
                   .catch(e => console.log(e));
             })
             .catch(e => console.log(e));
         });

      this.oneSignal.handleNotificationOpened().subscribe(jsonData => {
        let title =JSON.stringify(jsonData.notification.payload.title);
        let body = JSON.stringify(jsonData.notification.payload.body);
        let lIcon = JSON.stringify(jsonData.notification.payload.largeIcon);
        let bPicture = JSON.stringify(jsonData.notification.payload.bigPicture);

        let subtitle = body;
        let subtitl = subtitle.split("|");
        subtitl[0] = subtitl[0].replace(/["']/g, "");

        let titl = title.replace(/["']/g, "");
        let bod = subtitl[1].replace(/["']/g, "");
        let lIco = lIcon.replace(/["']/g, "");
        let bPictur = bPicture.replace(/["']/g, "");

        this.sqlite.create({
          name: 'data.db',
          location: 'default'
        })
          .then((db: SQLiteObject) => {
          db.executeSql('CREATE TABLE IF NOT EXISTS notifications(title VARCHAR(255),body VARCHAR(255),largeIcon VARCHAR(255),bigPicture VARCHAR(255),status INT(9),subtitle VARCHAR(255))', [])
            .then(() => {
                console.log('Executed SQL')
                db.executeSql('SELECT * FROM notifications WHERE title = ? and body = ? and subtitle = ?', [titl,bod,subtitl[0]])
                  .then((data) => {
                    let rows = data.rows;

                    if(rows.length == "")
                    {
                          db.executeSql('INSERT INTO notifications(title,body,largeIcon,bigPicture,status,subtitle) VALUES (?,?,?,?,?,?)', [titl,bod,lIco,bPictur,0,subtitl[0]])
                            .then(() =>  console.log('Executed SQL'))
                            .catch(e =>  console.log(e));
                    }
                    else
                    {
                        db.executeSql('UPDATE notifications SET status = ? WHERE title = ? and body = ?', [0,titl,bod])
                          .then(() =>  console.log("succes"))
                          .catch(e =>  console.log(e))
                    }
                  })
                  .catch(e => console.log(e));
            })
            .catch(e => console.log(e));

          })
          .catch(e => console.log(e));
      });

      this.oneSignal.endInit();
  });*/

        //----------------------------------------------------------------------
    }

    createDatabase() {
        this.sqlite
            .create({
                name: "data.db",
                location: "default"
            })
            .then((db: SQLiteObject) => {
                db.executeSql(
                    "CREATE TABLE IF NOT EXISTS votes(_id VARCHAR(200))",
                    []
                )
                    .then(() => console.log("Executed SQL"))
                    .catch(e => console.log(e));

                db.executeSql(
                    "CREATE TABLE IF NOT EXISTS user(_id VARCHAR(200), _rev VARCHAR(200),email VARCHAR(200),username VARCHAR(200),password VARCHAR(200),status INT(9))",
                    []
                )
                    .then(() => console.log("Executed SQL"))
                    .catch(e => console.log(e));

                db.executeSql(
                    "CREATE TABLE IF NOT EXISTS notifications(title VARCHAR(255),body VARCHAR(255),largeIcon VARCHAR(255),bigPicture VARCHAR(255),status INT(9),subtitle VARCHAR(255))",
                    []
                )
                    .then(() => console.log("Executed SQL"))
                    .catch(e => console.log(e));

                /*db.executeSql('CREATE TABLE IF NOT EXISTS newNotifications(_id VARCHAR(255),title VARCHAR(255),subtitle VARCHAR(255),body VARCHAR(255),bigPicture VARCHAR(255))', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));*/

                db.executeSql(
                    "CREATE TABLE IF NOT EXISTS newNotifications(_id VARCHAR(255))",
                    []
                )
                    .then(() => console.log("Executed SQL"))
                    .catch(e => console.log(e));

                db.executeSql(
                    "ALTER TABLE notifications ADD COLUMN subtitle VARCHAR(255)",
                    []
                )
                    .then(() => console.log("Base de Datos Actualizada"))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

    messageInfo(message) {
        let alert = this.alertCtrl.create({
            title: "Actualización",
            subTitle: message,
            buttons: ["OK"]
        });
        alert.present();
    }

    messageInfoToast(me) {
        let toast = this.toastCtrl.create({
            message: me,
            duration: 3000,
            position: "button"
        });

        toast.onDidDismiss(() => {});
        toast.present();
    }
}
