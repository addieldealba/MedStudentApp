import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { HomePage } from '../../pages/home/home';
import { AlertController, App} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ToastController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userData: any;
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public remoteService : RemoteServiceProvider,
      public alertCtrl: AlertController,
      public sqlite: SQLite,
      public toastCtrl: ToastController,
      public appCtrl: App,
      public facebook: Facebook,
      public storage: Storage) {
  }

  ionViewDidLoad() {
  }

  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData =
        {
            email: profile['email'],
            first_name: profile['first_name'],
            picture: profile['picture_large']['data']['url'],
            username: profile['name']
        }
        this.storage.set('email',this.userData.email);
        this.storage.set('username',this.userData.username);
        this.storage.set('profilePicture',this.userData.picture);
        this.storage.set('userStatus',1);
        this.navCtrl.setRoot(HomePage);
        this.messageInfo("Bienvenido " + this.userData.username);
      })
      .catch(e => console.log('Error logging into Facebook', e));
    });
  }

  messageInfo(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'button'
    });
    toast.onDidDismiss(() => {
    });
    toast.present();
  }

  /*email;
  pass;
  isLoggedIn:boolean = false;
  users: any;*/

 /*login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);

        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }*/

  /*logout() {
  this.fb.logout()
    .then( res => this.isLoggedIn = false)
    .catch(e => console.log('Error logout from Facebook', e));
}*/

/*getUserDetail(userid) {
  this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      console.log(res);
      this.users = res;
    })
    .catch(e => {
      console.log(e);
    });
}*/

  /*login()
  {
    this.remoteService.postUserLogin(this.email,this.pass)
    .then(data => {
      this.user = data;
      console.log(this.user.status);
      if(this.user.status == 1)
      {
          this.changeStatus();
          this.navCtrl.setRoot(HomePage);
          //this.appCtrl.getRootNav().setRoot(MenuPage);
          this.succesAlert();
          //this.checkStatus();
      }
      else
      {
        if(this.user.status == 0)
        {
          console.log("El usuario o contraseña estan mal");
          this.badUser();
          //this.errorAlert();
        }
        if(this.user.status == 2)
        {
          console.log("El usuario no ha sido encontrado");
        }
      }

    });
}*/

  /*badUser() {
    let toast = this.toastCtrl.create({
      message: 'El usuario o contraseña estan mal',
      duration: 3000,
      position: 'buttom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
}*/

  /*succesAlert() {
  let alert = this.alertCtrl.create({
    title: 'Login',
    subTitle: "Bienvenido " + this.user.email,
    buttons: ['OK']
  });
  alert.present();
}*/

  /*errorAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: "El usuario o contraseña estan mal",
    buttons: ['OK']
  });
  alert.present();
}*/

  /*SAlert(as) {
  let alert = this.alertCtrl.create({
    title: 'sql',
    subTitle: as,
    buttons: ['OK']
  });
  alert.present();
}*/

  /*changeStatus()
  {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO user(_id, _rev, email, username, password, status) VALUES (?,?,?,?,?,?)', [this.user._id, this.user._rev,this.user.email,this.user.username,this.user.password,this.user.status])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }*/

  /*checkStatus()
  {
    var sta;

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql('SELECT * FROM user',{})
            .then((data) => {
              let rows = data.rows;
              for(let i = 0; i < rows.length; i++)
              {
                sta = rows.item(i).status;

              }

              if(sta == 1)
              {
                this.navCtrl.setRoot(HomePage);

              }
            })
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
  }*/

}
