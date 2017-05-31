import { Detail } from "../models/detail";
import { AlertController } from 'ionic-angular';
import {Injectable} from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "../services/auth";

@Injectable()
export class DetailsService {
    private detail: Detail[] = [];

    constructor(private http: Http, private authServ: AuthService, private alertCtrl: AlertController) {} 

    
    pFetchList() {
        // const userId = this.authServ.getActiveUser().uid;
        return this.http.get('https://eventip-b868b.firebaseio.com/atlanta/0/pevents.json', this.detail)
        .map((response: Response) => {
            return response.json();
        })
        .do((detail) => {
            this.detail = detail
        console.log(detail)}); 
    }

    // storeFav(token: string) {
    //     const userId = this.authServ.getActiveUser().uid;
    //     return this.http.post('https://eventip-b868b.firebaseio.com/atlanta/0/favorites/0/' + userId + '/list.json?auth='+token, this.detail)
    //     .map((response: Response) => response.json())
    // }
    
    public handleError(errorMessage: string) {
    const error = this.alertCtrl.create({
      title: 'An Error Occurred',
      message: errorMessage,
      buttons: ['Ok']
    });
    error.present();
  }
}