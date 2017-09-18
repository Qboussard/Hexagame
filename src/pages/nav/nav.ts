import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HardPage } from '../hard/hard';
import { NormalPage } from '../normal/normal';
import { EasyPage } from '../easy/easy';


@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.getBestScore();
  }
  helpEasy: boolean = false;
  helpNormal: boolean = false;
  helpHard: boolean = false;
  helpDoom: boolean = false;

  recordEasy: number;
  recordNormal: number;
  recordHard: number;

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

  getBestScore() {
    this.storage.get('bestScoreEasy').then((val) => {
      this.recordEasy = val;
    });
    this.storage.get('bestScoreNormal').then((val) => {
      this.recordNormal = val;
    });
    this.storage.get('bestScoreHard').then((val) => {
      this.recordHard = val;
    });
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
