import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { PoppinPage } from '../pages/poppin/poppin';
import { FavoritesPage } from '../pages/favorites/favorites';
import { DetailsPage } from '../pages/details/details';
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import {AuthService} from "../services/auth";
import {FavService} from "../services/fav";
import {DetailsService} from "../services/details";
import {Reverse} from "../pipes/reverse";
import { ResetPassPage } from "../pages/reset-pass/reset-pass";
import { ContactPage } from "../pages/contact/contact";
import { TermsPage } from "../pages/terms/terms";
import { IonicImageViewerModule } from 'ionic-img-viewer';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from './firebase.config';
import {myFirebaseAuthConfig} from './firebase.config';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PoppinPage,
    FavoritesPage,
    DetailsPage,
    SigninPage,
    SignupPage,
    ResetPassPage,
    ContactPage,
    TermsPage,
    Reverse
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PoppinPage,
    FavoritesPage,
    DetailsPage,
    SigninPage,
    SignupPage,
    ResetPassPage,
    ContactPage,
    TermsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthService,
  FavService,
  DetailsService
  ]
})
export class AppModule {}
