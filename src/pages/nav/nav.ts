import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { NormalPage } from '../normal/normal';
import { EasyPage } from '../easy/easy';


@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  constructor(public navCtrl: NavController) {}
  helpeasy: boolean = false;
  helpnormal: boolean = false;
  helphard: boolean = false;
  helpdoom: boolean = false;

  toggleHelp(difficulty){
    switch(difficulty) {
      case "easy": {
        this.helpeasy = (this.helpeasy == false) ? true : false;
        break;
      }
      case "normal": {
        this.helpnormal = (this.helpnormal == false) ? true : false;
        break;
      }
      case "hard": {
        this.helphard = (this.helphard == false) ? true : false;
        break;
      }
      case "doom": {
        this.helpdoom = (this.helpdoom == false) ? true : false;
        break;
      }
    }
  }

  @ViewChild(Slides) slides: Slides;
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  goToEasyPage() {
    this.navCtrl.push(EasyPage);
  }
  goToNormalPage() {
    this.navCtrl.push(NormalPage);
  }
}
