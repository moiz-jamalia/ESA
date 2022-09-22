import { Component, OnInit } from '@angular/core';
import { WerkvorschriftenService } from '../../werkvorschriften.service';
import { NavController } from '@ionic/angular';
import { Werkvorschrift } from '../../werkvorschriften.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {
  wvs: Werkvorschrift[];
  constructor(private navCtrl: NavController, private werkVorschriftenService: WerkvorschriftenService) { }

  onBackHome() {
    this.navCtrl.navigateBack('/signIn').then(r => '');
  }

  ngOnInit() {
    this.wvs = this.werkVorschriftenService.getWerkvorschriften();
  }
}
