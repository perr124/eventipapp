import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {DetailsPage} from "../details/details";
import {AuthService} from "../../services/auth";
import {DetailsService} from "../../services/details";
import {FavService} from "../../services/fav";
import {ReversePipe} from "../../services/pipes/reverse.pipe";
import {FavDetail} from "../../models/favdetail";
import { Http, Response } from "@angular/http";

/*
  Generated class for the Favorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  private detail: FavDetail[] = [];
  listItems: FavDetail[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private fService: FavService,  private authServ: AuthService, private dService: DetailsService, private http: Http) {
    this.authServ.getActiveUser().getToken()
              .then(
                (token: string) => {
                  this.fService.fetchFav(token).subscribe(
                    (list: FavDetail[]) => {
                      if(list) {
                        this.listItems = list;
                        console.log(list)
                      } else {
                        this.listItems = []
                        console.log(this.listItems)
                      }
                    },
                    error => {
                      this.dService.handleError(error.json().error); 
                    }
                  )
                }
              );
  }

    ionViewDidLoad() {
          
    }

    ionViewWillEnter() {
      this.listItems = this.fService.getFav();
}

  // doRefresh(refresher) {
    
  //         this.listItems = this.fService.getFav();
  //         console.log(this.listItems)

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     refresher.complete();
  //   }, 2000);
  // }

  loadCard(event: FavDetail, index: number) {
    this.navCtrl.push(DetailsPage, {event: event, index: index}) 
    console.log(event, index)    
  }

  
}