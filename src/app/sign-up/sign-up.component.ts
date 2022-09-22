import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  onSignUp() {
    this.navCtrl.navigateBack('/home').then(r => '');
  }

  onBackHome() {
    this.navCtrl.navigateBack('/home').then(r => '');
  }
}
