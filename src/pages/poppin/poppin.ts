import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {DetailsPage} from "../details/details";
import {AuthService} from "../../services/auth";
import {DetailsService} from "../../services/details";
import {FavService} from "../../services/fav";
import {ReversePipe} from "../../services/pipes/reverse.pipe";
import {Detail} from "../../models/detail";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Poppin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-poppin',
  templateUrl: 'poppin.html'
})
export class PoppinPage{
  // listItems: Detail[];
  public listItems: Array<any> = [];
  events: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, private alertCtrl: AlertController, private authServ: AuthService, private dService: DetailsService,  private fService: FavService) {
    this.events = af.database.list('/atlanta/0/pevents');
        this.events.subscribe((data) => {
            this.listItems = data;
        });
  }

  ionViewDidLoad() {
    // this.dService.pFetchList().subscribe(
    //             (list: Detail[]) => {
    //               if(list) {
    //                 this.listItems = list; 
    //               } else {
    //                 this.listItems = []
    //               }
    //             }, 
    //             error => {
    //               this.handleError(error.json().error); 
    //             }
    //           );
    

    setTimeout(() => {
      this.fService.setFav();
    }, 2000);
          
      
  }

  ionViewWillLeave() {
    this.fService.setFav();
   }


  doRefresh(refresher) {
    // console.log('Begin async operation', refresher);
          this.events = this.af.database.list('/atlanta/0/pevents');
        this.events.subscribe((data) => {
            this.listItems = data;
        });

    this.fService.setFav();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  loadCard(event: Detail[], index: number) {
    // var arr = new Array<any>(event);
    // console.log(arr, index)
    this.navCtrl.push(DetailsPage, {event, index: index}) 
    
    // this._insta.getDetails().subscribe(res => {
    //   console.log(res);
    // });
    // console.log("im coolsss")
     
  }

  private handleError(errorMessage: string) {
    const error = this.alertCtrl.create({
      title: 'An Error Occurred',
      message: errorMessage,
      buttons: ['Ok']
    });
    error.present();
  }



}
