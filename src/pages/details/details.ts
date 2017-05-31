import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Detail} from "../../models/detail";
import { SocialSharing, Deeplinks } from 'ionic-native';
import {DetailsService} from "../../services/details";
import {FavService} from "../../services/fav";
import {AuthService} from "../../services/auth";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

/*
  Generated class for the Base page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit {
  private favoriteEvents: Detail[];
  visible = false;
  event: Detail;
  postEvent: any;
  index: number;
  address: string;
  date: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dService: DetailsService, private fService: FavService, private authServ: AuthService, private alertCtrl:AlertController, private http: Http) {}

  ngOnInit() {
    this.event = this.navParams.get('event');
    this.index = this.navParams.get('index');
    // this.address = this.event.address;
    // this.date = this.event.date;
    // console.log(this.event)
    // this.fService.setFav();

  }
  

  onViewImage(){
    console.log("open new page to display image i guess")
  }


  shareButton(event) {
    var options = {
      message: "Let's check out this event on "+this.date+". I found it on the EVENTiP app",
      subject: 'EVENTiP App',
      url: '',
      chooserTitle: 'Share via...'
    };
    SocialSharing.shareWithOptions(options);

    //Android needs different appstore link
    // var options = {
    //   message: "Let's check out this event on "+this.date+". I found it on the EVENTiP app",
    //   subject: 'EVENTiP App',
    //   url: '',
    //   chooserTitle: 'Share via...'
    // };
    // SocialSharing.shareWithOptions(options);
    
  }

  isFavorite(event: Detail)
  {
    return this.fService.isFav(event);
  }

  rmveFrmFavs(event: Detail){
    this.fService.removeFav(event)
    this.favoriteEvents=this.fService.getFav();

    this.fService.setFav();
    console.log('event removed')

  }

  addToFavs(event: Detail) {
    
      this.fService.addFavTo(event)
      
      this.fService.setFav();
      
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

  

