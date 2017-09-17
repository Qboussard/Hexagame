import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { HardPage } from '../hard/hard';
import { NormalPage } from '../normal/normal';
import { EasyPage } from '../easy/easy';


@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  constructor(public navCtrl: NavController) {}
  helpEasy: boolean = false;
  helpNormal: boolean = false;
  helpHard: boolean = false;
  helpDoom: boolean = false;

  toggleHelp(difficulty){
    switch(difficulty) {
      case "easy": {
        this.helpEasy = (this.helpEasy == false) ? true : false;
        break;
      }
      case "normal": {
        this.helpNormal = (this.helpNormal == false) ? true : false;
        break;
      }
      case "hard": {
        this.helpHard = (this.helpHard == false) ? true : false;
        break;
      }
      case "doom": {
        this.helpDoom = (this.helpDoom == false) ? true : false;
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
  goToHardPage() {
    this.navCtrl.push(HardPage);
  }
}
