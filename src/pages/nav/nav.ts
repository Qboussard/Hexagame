import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { HomePage } from '../home/home';
import { EasyPage } from '../easy/easy';
/**
 * Generated class for the NavPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  constructor(public navCtrl: NavController) {
  }

  @ViewChild(Slides) slides: Slides;
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  // goToOtherPage(nextPage) {
  //   console.log(nextPage);
  //   // this.navCtrl.push(nextPage);
  // }

  goToEasyPage() {
    this.navCtrl.push(EasyPage);
  }
  goToNormalPage() {
    this.navCtrl.push(HomePage);
  }
}
