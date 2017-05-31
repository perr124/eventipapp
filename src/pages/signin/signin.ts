import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth';
import {SignupPage} from '../signup/signup';
import {ResetPassPage} from '../reset-pass/reset-pass';

/*
  Generated class for the Signin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alrtCtrl: AlertController, private loadCtrl: LoadingController, private authServ: AuthService) {}


  onSignIn(form: NgForm) {  
    const loading = this.loadCtrl.create({
      content: 'Signing In..'
    });
    loading.present();
    this.authServ.signIn(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alrtCtrl.create({
        message: 'Incorrect Email or Password.',
        buttons: ['Ok']
      });
      alert.present();
    })
  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  forgotPassword() {
    this.navCtrl.push(ResetPassPage);
  }

}
