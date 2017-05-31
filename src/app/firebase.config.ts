import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyC6pbbKafpVo49-Eh1RA4dLvyuGYXiryF8",
    authDomain: "eventip-b868b.firebaseapp.com",
    databaseURL: "https://eventip-b868b.firebaseio.com",
    projectId: "eventip-b868b",
    storageBucket: "eventip-b868b.appspot.com",
    messagingSenderId: "309330984841"
};

export const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
};