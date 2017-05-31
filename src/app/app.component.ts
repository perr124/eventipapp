import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ContactPage } from '../pages/contact/contact';
import { TermsPage } from '../pages/terms/terms';
import { ResetPassPage } from '../pages/reset-pass/reset-pass';
import firebase from 'firebase';
import {AuthService} from '../services/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  isAuthenticated = false;
  rootPage: any = TabsPage;
  signInPage = SigninPage;
  signUpPage = SignupPage;
  contactPage = ContactPage;
  termsPage = TermsPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController, private authServ: AuthService) {
    firebase.initializeApp({
    apiKey: "AIzaSyC6pbbKafpVo49-Eh1RA4dLvyuGYXiryF8",
    authDomain: "eventip-b868b.firebaseapp.com",
    databaseURL: "https://eventip-b868b.firebaseio.com",
    projectId: "eventip-b868b",
    storageBucket: "eventip-b868b.appspot.com",
    messagingSenderId: "309330984841"
  });
  firebase.auth().onAuthStateChanged(user =>{
    if (user) {
      this.isAuthenticated = true;
      this.rootPage = TabsPage;
    }
    else{
      this.isAuthenticated = false;
      this.rootPage = SigninPage;
      }
   });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authServ.logOut();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}
