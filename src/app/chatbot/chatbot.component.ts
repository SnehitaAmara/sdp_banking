import { Component, OnInit } from '@angular/core';

declare const talk: any;

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor() { }
  
  funten() {
    talk();
  }

  ngOnInit(): void {
  }

  

}
