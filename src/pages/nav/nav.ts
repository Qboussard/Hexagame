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

  constructor(public navCtrl: NavController) {
  }
  helpeasy: boolean = false;
  helpnormal: boolean = false;
  helphard: boolean = false;
  helpdoom: boolean = false;

  toggleHelp(difficulty){
  console.log(this.helphard);
    switch(difficulty) {
      case "easy": {
        if(this.helpeasy == false)
          this.helpeasy = true;
        else
          this.helpeasy = false;
        break;
      }
      case "normal": {
        if(this.helpnormal == false)
          this.helpnormal = true;
        else
          this.helpnormal = false;
        break;
      }
      case "hard": {
        if(this.helphard == false)
          this.helphard = true;
        else
          this.helphard = false;
        break;
      }
      case "doom": {
        if(this.helpdoom == false)
          this.helpdoom = true;
        else
          this.helpdoom = false;
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
