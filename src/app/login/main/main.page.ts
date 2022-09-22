import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSelect} from '@ionic/angular';
import {WerkvorschriftenService} from '../../werkvorschriften.service';
import {Werkvorschrift} from '../../werkvorschriften.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {
  wvs: Werkvorschrift[];

  @ViewChild('werkschriftSelect', {static: false}) selectRef: IonSelect;

  constructor(private werkvorschriftenService: WerkvorschriftenService) { }

  ngOnInit() {
    this.wvs = this.werkvorschriftenService.getWerkvorschriften();
  }

  openSelect() {
    console.log('open');
    this.selectRef.open;
  }
}
