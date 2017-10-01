import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShareService} from '../../providers/share-service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-easy',
  templateUrl: 'easy.html',
})
export class EasyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private shareService: ShareService, private storage: Storage) {
  }

  possible: Array<any> = [
  "AliceBlue","Aqua","Aquamarine","Azure","Beige","Black","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Grey","Green","GreenYellow","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGrey","LightSteelBlue","LightYellow","LimeGreen","Magenta","Maroon","MidnightBlue","Olive","Orange","OrangeRed","Orchid","PaleGreen","PaleTurquoise","PaleVioletRed","Pink","Purple","Red","RoyalBlue","SaddleBrown","Salmon","SeaGreen","Silver","SkyBlue","Snow","SpringGreen","SteelBlue","Teal","Tomato","Turquoise","Violet","White","WhiteSmoke","Yellow","YellowGreen"
  ];
  point: number = 0;
  bestPoint: boolean;
  nbColors: number[] = [2, 4, 6, 8];
  difficulty: number = 0;
  hexa: string = "#";
  goodColor: string ="";
  color: string;
  colors: Array<any> = [];
  fail: number = 0;
  testcolor: boolean;
  record: number;

  i: number = 0;
  k: number = 1;

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateColorCode(){
    this.color = this.possible[this.getRandomInt(0, this.possible.length - 1)];
    return this.color;
  }

  setDifficulty(){
    if (this.point == 0 && this.point < 5)    return this.difficulty = 0;
    if (this.point >= 5 && this.point < 10)   return this.difficulty = 1;
    if (this.point >= 10 && this.point < 15)  return this.difficulty = 2;
    if (this.point >= 15)                     return this.difficulty = 3;
  }
  checkResponse(userChoice){
    if(userChoice != this.goodColor) return this.wrongResponse();
    this.point++;
    this.ngOnInit();
  }
  wrongResponse(){
    this.fail = 1;
    this.defineBestScore();
  }
  checkColorArray(obj){
    for(let i = 0; i<=this.colors.length; i++) {
      if (this.colors[i] == obj){
        this.color = this.generateColorCode();
        this.checkColorArray(this.color);
      }
    }
  }
  defineBestScore(){
    this.storage.get('bestScoreEasy').then((val) => {
      if (val == null || this.point > val) {
        this.storage.set('bestScoreEasy', this.point);
        this.bestPoint = true;
      }
      this.record = val;
    });
  }
  reset(){
    this.point = 0;
    this.fail = 0;
    this.bestPoint = false;
  }
  shareScore(){
    this.shareService.shareScreenshot();
  }
  ngOnInit(){
    if(this.fail == 1) this.reset();

    this.colors = [];
    this.setDifficulty();

    for(this.k=1 ; this.k <= this.nbColors[this.difficulty] ; this.k++){

      this.color = this.generateColorCode();
      this.checkColorArray(this.color);
      if(this.testcolor){
        this.color = this.generateColorCode();
      }
      this.colors.push(this.color);
    }
    this.goodColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  goToNavPage() {
    this.navCtrl.pop()
  }
  ionViewWillLeave() {
    this.navParams.get("parentPage").ngOnInit();
  }
}
