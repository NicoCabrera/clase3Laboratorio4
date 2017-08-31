import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivina-numero.component.html',
  styleUrls: ['./adivina-numero.component.css']
})
export class AdivinaNumeroComponent {
  randomValue:any;
  userNumber:any;

  constructor() {
    this.generate(1,11);
  }

  generate(min,max){
    let randomNumber =  Math.random() * (max - min) + min;
    this.randomValue = Math.floor(randomNumber);
  }
  
  verify(){
    if(this.userNumber === this.randomValue){
      alert("ganaste!");
    }else{
      alert("perdiste!");
    }
    this.userNumber = "";
  }

}
