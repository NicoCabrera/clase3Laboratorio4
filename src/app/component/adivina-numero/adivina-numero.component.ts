import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivina-numero.component.html',
  styleUrls: ['./adivina-numero.component.css']
})
export class AdivinaNumeroComponent {
  randomValue: any;
  userNumber: any;
  hideMessage: boolean;
  lose: boolean;
  constructor() {
    this.generate(1, 11);
    this.hideMessage = true;
    this.lose = true;
  }

  generate(min, max) {
    let randomNumber = Math.random() * (max - min) + min;
    this.randomValue = Math.floor(randomNumber);
    this.hideMessage = true;
  }

  verify() {
    if (this.userNumber == this.randomValue) {
      this.lose = false;
    } else {
      this.lose = true;
    }
    this.hideMessage = false;
  }

}
