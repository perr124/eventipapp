import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../services/auth";
import {SigninPage} from '../signin/signin';

/*
  Generated class for the ResetPass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reset-pass',
  templateUrl: 'reset-pass.html'
})
export class ResetPassPage {

  constructor(private authServ: AuthService, private loadCtrl: LoadingController, private alrtCtrl: AlertController, private navCtrl: NavController) {}
  
  onReset(form: NgForm){  
    
    this.authServ.resetPassword(form.value.email)
    .then(data => {
      const alert1 = this.alrtCtrl.create({
        // title: 'SignUp Failed!',
        message: 'Email has been sent.',
        buttons: ['Ok']
      });
      alert1.present();
    })
    .catch(error => {
      const alert = this.alrtCtrl.create({
        // title: 'SignUp Failed!',
        message: 'Enter valid email.',
        buttons: ['Ok']
      });
      alert.present();
    })
  }
    signInPage() {
    this.navCtrl.push(SigninPage);
  }
}  
