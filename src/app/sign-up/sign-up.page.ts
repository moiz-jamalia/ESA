import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  maxDate: Date = new Date(Date.now());

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSignUp() {
    this.navCtrl.navigateBack('/home');
  }
}
