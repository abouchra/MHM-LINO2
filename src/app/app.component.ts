import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EtatPage } from '../pages/etat/etat';
import { MeteoPage } from '../pages/meteo/meteo';
import { PlacesPage } from '../pages/places/places';
import { DetailService } from '../pages/detail/detail.service';
@Component({
  templateUrl: 'app.html'
  
  
})
export class MyApp {
  
  rootPage:any = EtatPage;
  menus=[
    {title: 'My Etat', component:EtatPage},
    {title: 'My Meteo', component:MeteoPage},
    {title: 'My Places', component:PlacesPage},
    {title: 'My Home', component:HomePage},
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onPage(m) : void {
    this.rootPage=m.component;
  }
}

