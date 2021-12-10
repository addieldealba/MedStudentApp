import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';
import { AlertController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class RemoteServiceProvider {

  private wikis: any;
  private apiUrlWiki: string;
  private lessons: any;
  private apiUrlLessons: string;
  private reviews: any;
  private apiUrlReviews: string;
  private projects:any;
  private apiUrlProjects : string;
  private apiUrlVote: string;
  private apiUrlFindUser:string;
  private user: any;
  private apiUrlDoVote: string;
  private apiUrlContact: string;
  private apiUrlNotifications: string;
  private notifications:any;
  private apiUrlCoupons: string;
  private coupons:any;
  rootPage: any;
  private api_key = 'html is not a programming language';
  constructor(public http: Http, public alertCtrl: AlertController, public toastCtrl: ToastController) {

    let hash = Md5.hashStr(this.api_key);

    const test_server = "https://localhost:8000/api/";
    // const new_server_domain = "https://leonesxlasalud.herokuapp.com/api/";
    const server_domain = "https://leonesxlasalud.herokuapp.com/api/";
    const new_server_domain = server_domain;
    // const new_server_domain = test_server;
    // this.apiUrlWiki = 'https://leonesxlasalud-api.mybluemix.net/api/wiki/'+hash;
    // this.apiUrlLessons = 'https://leonesxlasalud-api.mybluemix.net/api/university/'+hash;
    // this.apiUrlWiki = new_server_domain + "wiki/" + hash;
    this.apiUrlLessons = new_server_domain + "university/" + hash;
    this.apiUrlReviews = new_server_domain + "glosario/" + hash;
    this.apiUrlProjects = new_server_domain + "projects/" + hash;
    this.apiUrlContact = new_server_domain + "message";
    this.apiUrlVote = new_server_domain + "project/vote/";
    this.apiUrlNotifications = new_server_domain + "notifications/" + hash;
    this.apiUrlCoupons = new_server_domain + "coupons/" + hash;
    //this.apiUrlVote = test_server + "project/vote/" + hash;
    //this.apiUrlProjects = 'https://leonesxlasalud-api.mybluemix.net/api/projects/'+hash;
    //this.apiUrlVote = 'https://leonesxlasalud-api.mybluemix.net/api/project/vote';
    //this.apiUrlVote = 'https://leonesxlasalud-api2.mybluemix.net/api/project/vote';
    //this.apiUrlFindUser = 'https://leonesxlasalud-api2.mybluemix.net/api/findUser';

    //this.apiUrlWiki = 'https://leonesxlasalud-api.mybluemix.net/api/wiki/'+hash;
    //this.apiUrlLessons = 'https://leonesxlasalud-api.mybluemix.net/api/university/'+hash;
    //this.apiUrlContact = 'https://leones-por-la-salud.mybluemix.net/api/contact'
    // this.apiUrlProjects = 'https://leones-por-la-salud.mybluemix.net/api/projects';
    //this.apiUrlProjects = 'https://leonesxlasalud-api2.mybluemix.net/api/projects';
    //this.apiUrlVote = 'https://leonesxlasalud-api2.mybluemix.net/api/project/like';
    ///this.apiUrlVote = 'https://leones-por-la-salud.mybluemix.net/api/project/vote';

  }

  public getApiLessons() : any{
    return new Promise(resolve => {
      this.http.get(this.apiUrlLessons)
        .map(res => res.json())
        .subscribe(data => {
          this.lessons = data.data;
          resolve(this.lessons);
      },
      error => {
          if(error.status == 0){
              this.noInternet();
          }
      });
    });
  }

  public getApiReviews() : any{
    return new Promise(resolve => {
      this.http.get(this.apiUrlReviews)
        .map(res => res.json())
        .subscribe(data => {
          this.reviews = data.data;
          resolve(this.reviews);
      },
      error => {
          if(error.status == 0){
              this.noInternet();
          }
      });
    });
  }



  public getApiWikis(){
    return new Promise(resolve => {
    this.http.get(this.apiUrlWiki)
      .map(res => res.json())
      .subscribe(data => {
        this.wikis = data;
        resolve(this.wikis);
      },
      error => {
          if(error.status == 0)
          {
              this.noInternet();
          }
      });
    });
  }

  public getApiProjects() : any{
    return new Promise(resolve => {
    this.http.get(this.apiUrlProjects)
      .map(res => res.json())
      .subscribe(data => {
          for(var i = 0; i < data.data.length; i++)
            {
               data.data[i]["show"];
               data.data[i]["show"]= "true";
            }
        this.projects = data.data;
        resolve(this.projects);
    },
    error => {
        if(error.status == 0)
        {
            // this.noInternet();
            console.log("No internet");
        }
    });
    });
  }

  public getApiNotifications(): any{
      return new Promise(resolve => {
      this.http.get(this.apiUrlNotifications)
        .map(res => res.json())
        .subscribe(data => {
            for(var i = 0; i < data.data.length; i++)
              {
                 data.data[i]["show"];
                 data.data[i]["show"]= "true";
              }
          this.notifications = data.data;
          resolve(this.notifications);
      },
      error => {
          if(error.status == 0)
          {
              // this.noInternet();
              console.log("No Internet");
          }
      });
      });
  }

  /*public postUserLogin(email, pass){
    var body = {
        "email": email,
        "password": pass
      };
    return new Promise(resolve => {
    this.http.post(this.apiUrlFindUser, body)
    .map(res => res.json())
    .subscribe(data => {
      this.user = data;
      resolve(this.user);
  },
  error => {
      if(error.status == 0){
          this.noInternet();
      }
        });
    });
}*/

    public async postProjectVote(pro): Promise<any>{
      try{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
        let body = "id=" + pro;
        const response = await this.http.post(this.apiUrlVote,body,options).toPromise();
        return response.json();
      } catch(err){
        throw new Error(err.status);
      }
    }

  public async postApiContact(name, email, message): Promise<any>{
    try{
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers });
      let body = "name="+name+"&email="+email+"&message="+message;
      const response = await this.http.post(this.apiUrlContact,body,options).toPromise();
      return response.json();
    } catch(err){
      throw new Error(err.status);
    }
  }

  public getApiCoupons(): any{
      return new Promise(resolve => {
      this.http.get(this.apiUrlCoupons)
        .map(res => res.json())
        .subscribe(data => {
          this.coupons = data.data;
          resolve(this.coupons);
      },
      error => {
          if(error.status == 0)
          {
              // this.noInternet();
              console.log("No internet");  
          }

      });
      });
  }

  private noInternet() {
    let toast = this.toastCtrl.create({
      message: 'Es necesario tener acceso a internet para poder ver el contenido',
      duration: 3000,
      position: 'bottom'
    });
    toast.present(toast);
  }
}
