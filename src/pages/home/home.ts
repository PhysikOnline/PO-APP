import { Pro } from '@ionic/pro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    Pro.getApp().monitoring.log('This happens sometimes and very often', { level: 'error' })
  }

}
