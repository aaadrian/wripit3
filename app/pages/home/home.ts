import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  //constructor(public navCtrl: NavController) {
  //
  //}
  constructor(public alertCtrl: AlertController) {

  }

doAlert() {
    
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  
}
}




