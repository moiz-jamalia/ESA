import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  constructor(public authService: AuthService, private navCtrl: NavController) {}

  ngOnInit() {}

  onBackHome() {
    this.navCtrl.navigateBack('/home').then(r => '');
  }
}
