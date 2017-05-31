import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../services/auth";
import {SigninPage} from '../signin/signin';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(private authServ: AuthService, private loadCtrl: LoadingController, private alrtCtrl: AlertController, private navCtrl: NavController) {}

  onSignUp(form: NgForm){  
    const loading = this.loadCtrl.create({
      content: 'Signing Up..'
    });
    loading.present();
    this.authServ.signUp(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alrtCtrl.create({
        // title: 'SignUp Failed!',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    })
  }
    signInPage() {
    this.navCtrl.push(SigninPage);
  }
}
