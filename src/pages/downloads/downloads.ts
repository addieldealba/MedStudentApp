import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { RemoteServiceProvider } from "../../providers/remote-service/remote-service";
import { HelperProvider } from "../../providers/helper/helper";
import { Network } from "@ionic-native/network";
import { AlertController, LoadingController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { File } from "@ionic-native/file";
import { DocumentViewer } from "@ionic-native/document-viewer";
import { FileOpener } from "@ionic-native/file-opener";

@IonicPage()
@Component({
    selector: "page-downloads",
    templateUrl: "downloads.html",
})
export class DownloadsPage {
    public selectedValue: any;
    public offlineFiles: any;
    public disconnect: boolean = false;
    public loader: any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public remoteService: RemoteServiceProvider,
        public network: Network,
        private helper: HelperProvider,
        private storage: Storage,
        public alertCtrl: AlertController,
        public loading: LoadingController,
        public file: File,
        public platform: Platform,
        public document: DocumentViewer,
        public fileOpener: FileOpener
    ) {}

    ionViewWillEnter() {
        // Loaader to get offline files
        this.loader = this.loading.create({
            content: "Actualizando descargas",
        });

        this.loader.present().then(() => {
            this.getOfflineFiles();
        });
    }

    ionViewDidLoad() {}

    //Shows Alert
    public showAlert(title, sub): void {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: sub,
            buttons: ["Ok"],
        });
        alert.present();
    }

    //Gets Offline Files
    private getOfflineFiles(): any {
        //Set Path of offline Downloaded File
        let path = null;
        if (this.platform.is("ios")) {
            path = this.file.documentsDirectory;
        } else {
            path = this.file.dataDirectory;
        }

        //Populate list of offline downloaded file
        this.file.listDir(path, "").then(
            (files) => {
                this.loader.dismiss();
                this.offlineFiles = files;
            },
            (error) => {
                this.loader.dismiss();
                console.log("Error" + error);
            }
        );
    }

    openPdf(url) {
        //Open Downloaded PDF

        if (this.platform.is("ios")) {
            this.document.viewDocument(url, "application/pdf", {});
        } else {
            this.fileOpener.open(url, "application/pdf");
        }
    }
}
