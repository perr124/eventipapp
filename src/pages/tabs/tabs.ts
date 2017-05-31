import { Component } from '@angular/core';
import { PoppinPage } from "../poppin/poppin";
import { FavoritesPage } from "../favorites/favorites";

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  popPage = PoppinPage;
  mixPage = FavoritesPage;
  
  }
