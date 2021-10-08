import { Component, OnInit } from '@angular/core';

declare const amount : any;
declare const EnteredAmounts: any;
declare const GeneratingSlips: any;

@Component({
  selector: 'app-curreny-calculator',
  templateUrl: './curreny-calculator.component.html',
  styleUrls: ['./curreny-calculator.component.css']
})
export class CurrenyCalculatorComponent implements OnInit {

  constructor() { }

  imp1(){
    amount();
  }

  imp2(){
    EnteredAmounts();
  }

  imp3(){
    GeneratingSlips();
  }

  ngOnInit(): void {
  }

}
