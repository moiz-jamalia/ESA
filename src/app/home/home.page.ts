import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  onLogIn() {
    console.log('Log in');
    this.navCtrl.navigateForward('/login');
  }

  onSignIn() {
    console.log('Sign up');
    this.navCtrl.navigateForward('/signup');
  }

}
