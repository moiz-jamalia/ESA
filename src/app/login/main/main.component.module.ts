import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations:[MainPage]
})

export class MainPageModule {}
