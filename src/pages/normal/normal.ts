import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShareService} from '../../providers/share-service';

@Component({
  selector: 'page-normal',
  templateUrl: 'normal.html'
})
export class NormalPage {
  constructor(public navCtrl: NavController, private shareService: ShareService) {}

  possible: string = "0123456789ABCDEF";
  point: number = 0;
  nbColors: number[] = [2, 4, 6];
  difficulty: number = 0;
  hexa: string = "#";
  goodColor: string ="";
  color: string;
  colors: Array<any> = [];
  fail: number = 0;


  i: number = 0;
  k: number = 1;

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateColorCode(){
    this.i = 0;
    this.hexa = "#";
    for( this.i=1 ; this.i <= 6 ; this.i++){
      var randomInt = this.getRandomInt(0, this.possible.length - 1);
  		this.hexa += this.possible[randomInt];
  	}
    return this.hexa;
  }

  setDifficulty(){
    if (this.point == 0 && this.point < 5)  return this.difficulty = 0;
    if (this.point >= 5 && this.point < 10) return this.difficulty = 1;
    if (this.point >= 10)                   return this.difficulty = 2;
  }

  checkResponse(userChoice){
    if(userChoice != this.goodColor) return this.fail = 1;
    this.point++;
    this.ngOnInit();
  }

  reset(){
    this.point = 0;
    this.fail = 0;
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
      this.colors.push(this.color);
    }
    this.goodColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

}
