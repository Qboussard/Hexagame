import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

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


  generateColorCode(){
    this.i = 0;
    this.hexa = "#";
    for( this.i=1 ; this.i <= 6 ; this.i++){
  		this.hexa = this.hexa + this.possible.charAt(Math.floor(Math.random() * this.possible.length));
  	}
    return this.hexa;
  }

  setDifficulty(){
    if(this.point == 0 && this.point < 5){
      this.difficulty = 0;
    }
    if(this.point >= 5 && this.point < 10){
      this.difficulty = 1;
    }
    if(this.point >= 10){
      this.difficulty = 2;
    }
  }

  checkResponse(userChoice){
    if(userChoice == this.goodColor){
      this.point++;
      this.ngOnInit();
    }
    else{
      this.fail = 1;
    }
  }

  ngOnInit(){
    if(this.fail == 1){
      this.point = 0;
      this.fail = 0;
    }

    this.colors = [];
    this.setDifficulty();

    for(this.k=1 ; this.k <= this.nbColors[this.difficulty] ; this.k++){
      this.color = this.generateColorCode();
      this.colors.push(this.color);
    }
    this.goodColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

}
