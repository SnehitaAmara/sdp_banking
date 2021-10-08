import { Component, OnInit } from '@angular/core';

declare const computeResults: any;

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fun(){
    computeResults();
  }

}
