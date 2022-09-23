import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSignIn() {
    this.navCtrl.navigateForward('/login/main');
  }
}
