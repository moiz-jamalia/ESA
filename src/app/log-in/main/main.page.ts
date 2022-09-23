import { Component, OnInit } from '@angular/core';
import {Werkvorschrift} from '../../werkvorschriften.model';
import {WerkvorschriftenService} from '../../werkvorschriften.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  wvs: Werkvorschrift[];

  constructor(private werkvorschriftenService: WerkvorschriftenService) { }

  ngOnInit() {
    this.wvs = this.werkvorschriftenService.getWerkvorschriften();
  }

  openSelect() {
    console.log('open');
  }
}
