import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";
import {
    InAppBrowser,
    InAppBrowserOptions,
} from "@ionic-native/in-app-browser";
import { LoadingController } from "ionic-angular";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

import { File } from "@ionic-native/file";
import { FileOpener } from "@ionic-native/file-opener";
import { FileTransfer } from "@ionic-native/file-transfer";
import { DocumentViewer } from "@ionic-native/document-viewer";
import { AlertController } from "ionic-angular";
import { HTTP } from "@ionic-native/http";

@IonicPage()
@Component({
    selector: "page-glosario-details-content",
    templateUrl: "glosario-details-content.html",
})
export class GlosarioDetailsContentPage {
    public resources;
    public videoUrl;
    public pdfUrl;
    public disconnect: boolean = false;
    public loader: any;
    public iframe: any;
    public OfflineToggle: boolean;
    public AlreadyDownloaded: boolean = false;
    currentOrientation: string = "";
    public alertTitle: any;
    public alertSubtitle: any;
    public pdfUrlToOpen;

    constructor(
        private screenOrientation: ScreenOrientation,
        public navCtrl: NavController,
        public navParams: NavParams,
        private domSanitizer: DomSanitizer,
        private iab: InAppBrowser,
        public loading: LoadingController,
        public platform: Platform,
        public file: File,
        public ft: FileTransfer,
        public fileOpener: FileOpener,
        public document: DocumentViewer,
        public alertController: AlertController,
        public http: HTTP
    ) {
        this.resources = navParams.get("resources");

        this.loader = this.loading.create({
            content: "Cargando Vídeo",
        });
    }

    // PDFFileDownload
    FileAvailableOffline($event, pdfUrl, fileNameToSave) {
        //Initial Download URL
        var pdfId = pdfUrl.split("/").pop();
        var downloadUrl =
            "https://drive.google.com/uc?export=download&id=" + pdfId;

        //Set Path to Save File
        let path = null;
        if (this.platform.is("ios")) {
            path = this.file.documentsDirectory;
        } else {
            path = this.file.dataDirectory;
        }
        //  $-$ is used as a separator
        var fileNameToSaveWithPdfId = this.resources.lessonTitle + " - " + fileNameToSave;
        var fileNameAndPath = path + fileNameToSaveWithPdfId;

        //This If block would download PDF
        if (this.OfflineToggle == true && this.AlreadyDownloaded == false) {
            //File-Transfer plugin version 4.x.x doesn't allow redirects by default. This is a workaround. We Use @ionic-native/http module to get the URL returned by 302 redirect request and use that in file-transfer plugin
            let redirectURL = "";

            this.loader = this.loading.create({
                content: "Descargando...",
            });

            this.loader
                .present()
                .then(() => {
                    this.http.get(downloadUrl, {}, {}).then((data) => {
                        redirectURL = data.url;

                        // Use File Transfer Plugin to Download file
                        const transfer = this.ft.create();

                        transfer
                            .download(
                                redirectURL,
                                `${fileNameAndPath}.pdf`,
                                true
                            )
                            .then(
                                (entry) => {
                                    this.AlreadyDownloaded = true;
                                    this.pdfUrlToOpen =
                                        fileNameAndPath + ".pdf";

                                    //In IOS, if the file name had spaces, it couldn't be opened directly
                                    // Available options: Use native url property in html view or follow the workaround as below
                                    if (this.platform.is("ios")) {
                                        this.pdfUrlToOpen = this.pdfUrlToOpen.replace(
                                            /\s+/g,
                                            "%20"
                                        );
                                    }

                                    this.loader.dismiss();
                                    let url = entry.toURL();

                                    // The Below code would open the downloaded pdf (Useful for Testing)
                                    // if(this.platform.is('ios')){
                                    // this.document.viewDocument(url,'application/pdf', {});
                                    // }else{
                                    // this.fileOpener.open(url,'application/pdf');
                                    // }

                                    // Create Alert to show Download Completed Successfully
                                    this.alertTitle =
                                        "Descarga Completa";
                                    this.alertSubtitle = `Manual sin conexión en módulo Descargas`;
                                    this.presentAlert(
                                        this.alertTitle,
                                        this.alertSubtitle
                                    );
                                },
                                (error) => {
                                    console.log(JSON.stringify(error));
                                }
                            );
                    });
                })
                .catch((error) => {
                    console.log("HTTP error" + JSON.stringify(error));
                });
        }

        //To delete the downloaded PDF
        if (this.OfflineToggle == false) {
            this.loader = this.loading.create({
                content: "Borrando...",
            });

            this.loader
                .present()
                .then(() => {
                    this.file
                        .removeFile(path, `${fileNameToSaveWithPdfId}.pdf`)
                        .then(
                            (success) => {
                                this.pdfUrlToOpen = this.resources.pdf;
                                this.AlreadyDownloaded = false;

                                this.loader.dismiss();
                                console.log(success);

                                // Create Alert
                                this.alertTitle = "Eliminar descarga";
                                this.alertSubtitle =
                                    "Descarga eliminada con éxito!";
                                this.presentAlert(
                                    this.alertTitle,
                                    this.alertSubtitle
                                );
                            },
                            (error) => {
                                console.log(JSON.stringify(error));
                            }
                        );
                })
                .catch((error) => {
                    console.log("error" + JSON.stringify(error));
                });
        }
    }

    async presentAlert(alertTitle, alertSubtitle) {
        let alert = this.alertController.create({
            title: alertTitle,
            subTitle: alertSubtitle,
            buttons: ["OK"],
        });
        alert.present();
    }

    GetCurrentOrientation() {
        this.currentOrientation = this.screenOrientation.type;
    }

    SetToLandScapeOrientation() {
        this.screenOrientation.lock(
            this.screenOrientation.ORIENTATIONS.LANDSCAPE
        );
    }

    AllowToRotate() {
        this.screenOrientation.unlock();
    }

    DetectOrientation() {
        this.screenOrientation.onChange().subscribe(() => {
            alert("Orientation Changed.");
            alert("Current orientation is =" + this.screenOrientation.type);
        });
    }

    iframeLoaded() {
        this.iframe = true;
    }
    openPdf(pdf) {
        if (this.AlreadyDownloaded == false) {
            //If PDF is not downloaded, open it in In App Browser

            if (this.platform.is("android")) {
                const browser = this.iab.create(pdf);
            } else {
                const options: InAppBrowserOptions = {
                    location: "no",
                    presentationstyle: "formsheet",
                };

                const browser = this.iab.create(pdf, "_blank", options);
            }
        } else {
            //If PDF is already downloaded, open it in local pdf viewer

            if (this.platform.is("ios")) {
                this.document.viewDocument(pdf, "application/pdf", {});
            } else {
                this.fileOpener.open(pdf, "application/pdf");
            }
        }
    }

    ionViewWillEnter() {
        this.pdfUrl = this.resources.pdf;
        this.pdfUrlToOpen = this.resources.pdf;
        var pdfId = this.pdfUrl.split("/").pop();

        // The below if block controls the default value of file download toggle button
        var fileNameToCheck = this.resources.lessonTitle + " - " + this.resources.name + ".pdf";
        let path = null;
        if (this.platform.is("ios")) {
            path = this.file.documentsDirectory;
        } else {
            path = this.file.dataDirectory;
        }

        this.file
            .checkFile(path, fileNameToCheck)
            .then((checkValue) => {
                if (checkValue == true) {
                    // File is already Downloaded
                    this.AlreadyDownloaded = true;
                    this.pdfUrlToOpen = path + "/" + fileNameToCheck;
                    //In IOS, if the file name had spaces, it couldn't be opened directly
                    // Available options: Use native url property in html view or follow the workaround as below
                    if (this.platform.is("ios")) {
                        this.pdfUrlToOpen = this.pdfUrlToOpen.replace(
                            /\s+/g,
                            "%20"
                        );
                    }
                } else {
                    // File is not already Downloaded
                    this.AlreadyDownloaded = false;
                    this.pdfUrlToOpen = this.pdfUrl;
                }
            })
            .catch((error) => {
                console.log(error);
            });

        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
            "https://www.youtube.com/embed/MLleDRkSuvk"
        );
        this.loader.present().then(() => {
            if (this.videoUrl != undefined) {
                this.loader.dismiss();
            }
        });
    }
}
