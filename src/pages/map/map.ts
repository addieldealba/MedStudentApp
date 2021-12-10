import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";
import { Geolocation } from '@ionic-native/geolocation';
import {ToastController} from 'ionic-angular';
import { resolveDefinition } from '@angular/core/src/view/util';
import { Platform } from 'ionic-angular'

@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  map: GoogleMap;

  constructor(public toastCtrl: ToastController,
    private geolocation: Geolocation,
    public platform: Platform) { 
  }

  ionViewWillLoad() {
    
      this.loadMap();
    
  }



  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAFJTvC_E1YH2yCUmqM2VIyTZWhaEFGyiM',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAFJTvC_E1YH2yCUmqM2VIyTZWhaEFGyiM'
    });

    //Watch User Position
    //let watch = this.geolocation.watchPosition();

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    

    // Get User Location 
    this.geolocation.getCurrentPosition(options).then((resp) => {
     
     // this.latitudeUser = resp.coords.latitude
     // this.longitudeUser = resp.coords.longitude
    
    //Toast to check User Location
     //let location='lat '+resp.coords.latitude+' lang '+resp.coords.longitude;
      // let toast = this.toastCtrl.create({
      //   message: location,
      //   duration: 3000
      // });
      //  toast.present();
    
    
    let mapOptions: GoogleMapOptions = {
      // user gestures on the map
      gestures:{
        rotate:true,
        tilt:false,
        scroll:true,
        zoom: false
      },
      camera: {
         target: {
           lat: resp.coords.latitude,
           lng: resp.coords.longitude
         },
         zoom: 17,
         tilt: 30,
         
       }
       
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // //==================User Location Marker with watch====================
    // let Usermarker:Marker;
    // // let count = 1;
    // watch.subscribe((data) => {
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    
    //   let userLat = data.coords.latitude;
    //   let userLong = data.coords.longitude;

    //   const UserMarkerIcon = {
    //     url: './assets/imgs/user2.png',
    //     size: {
    //       width: 30,
    //       height: 30
    //     }
    //   };
    //   Usermarker = this.map.addMarkerSync({
    //     title: 'Your Location',
    //     icon: UserMarkerIcon,
    //     position: {
    //       lat: userLat,
    //       lng: userLong
    //     }
    //   });

    // });

    // ===================================================================


    // ====================  User Marker without watch  ==================

    let userLat = resp.coords.latitude;
      let userLong = resp.coords.longitude;

      const UserMarkerIcon = {
        url: './assets/imgs/user2.png',
        size: {
          width: 30,
          height: 30
        }
      };
      let Usermarker: Marker = this.map.addMarkerSync({
        title: 'Your Location',
        icon: UserMarkerIcon,
        position: {
          lat: userLat,
          lng: userLong
        }
      });

    // ==============================================================









    let marker: Marker = this.map.addMarkerSync({
      title: 'Edificio A',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.685794,
        lng: -103.331819
      }
    });
    // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
    
    let marker2: Marker = this.map.addMarkerSync({
      title: 'Edificio B',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.685036,
        lng: -103.333029
      }
    });
  
    let marker3: Marker = this.map.addMarkerSync({
      title: 'Edificio C',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.685566,
        lng: -103.332889
      }
    });

    let marker4: Marker = this.map.addMarkerSync({
      title: 'Edificio D',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.686541,
            lng: -103.332641
      }
    });

    let marker5: Marker = this.map.addMarkerSync({
      title: 'Edificio E',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.687002,
        lng: -103.333381
      }
    });


    let marker6: Marker = this.map.addMarkerSync({
      title: 'Edificio F',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.687198,
        lng: -103.333258
      }
    });

    let marker7: Marker = this.map.addMarkerSync({
      title: 'Edificio G',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.687446,
        lng: -103.333198
      }
    });


    let marker8: Marker = this.map.addMarkerSync({
      title: 'Edificio H',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.688449,
        lng: -103.331754
      }
    });

    let marker9: Marker = this.map.addMarkerSync({
      title: 'Edificio H',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.688158,
        lng: -103.331296
      }
    });


    let marker10: Marker = this.map.addMarkerSync({
      title: 'Edificio I',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.688667,
        lng: -103.331598
      }
    });

    let marker11: Marker = this.map.addMarkerSync({
      title: 'Edificio J',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.68733,
            lng: -103.331258
      }
    });

    let marker12: Marker = this.map.addMarkerSync({
      title: 'Edificio K',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.688262,
        lng: -103.33088
      }
    });


    let marker13: Marker = this.map.addMarkerSync({
      title: 'Edificio L',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.688323,
        lng: -103.330392
      }
    });


    let marker14: Marker = this.map.addMarkerSync({
      title: 'Edificio M',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.688021,
        lng: -103.330639
      }
    });

    let marker15: Marker = this.map.addMarkerSync({
      title: 'Edificio N',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.687579,
            lng: -103.330275
      }
    });

    let marker16: Marker = this.map.addMarkerSync({
      title: 'Edificio N',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.68731,
            lng: -103.330501
      }
    });

    let marker17: Marker = this.map.addMarkerSync({
      title: 'Edificio N',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.687016,
        lng: -103.33087
      }
    });
    
    let marker18: Marker = this.map.addMarkerSync({
      title: 'Edificio ~',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.687531,
            lng: -103.331618
      }
    });

    let marker19: Marker = this.map.addMarkerSync({
      title: 'Edificio O',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.686866,
        lng: -103.332284
      }
    });



    let marker20: Marker = this.map.addMarkerSync({
      title: 'Edificio P',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.686448,
            lng: -103.331993
      }
    });



    let marker21: Marker = this.map.addMarkerSync({
      title: 'Edificio Q',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.68617,
        lng: -103.332024
      }
    });




    let marker22: Marker = this.map.addMarkerSync({
      title: 'Edificio R',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.686145,
            lng: -103.33149
      }
    });


    let marker23: Marker = this.map.addMarkerSync({
      title: 'Edificio S',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.687748,
        lng: -103.331119
      }
    });


    let marker24: Marker = this.map.addMarkerSync({
      title: 'Edificio T',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.68762,
            lng: -103.329866
      }
    });


    let marker25: Marker = this.map.addMarkerSync({
      title: 'Edificio U',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 20.686757,
        lng: -103.330733
      }
    });
  
  }).catch((error) => {
    console.log('Error getting location', error);
  });


  }
}