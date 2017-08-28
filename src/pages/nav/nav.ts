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
  help: boolean = false;

  toggleHelp(){
    if(this.help == false)
      this.help = true;
    else
      this.help = false;
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
