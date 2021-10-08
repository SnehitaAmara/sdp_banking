import { Component, OnInit } from '@angular/core';
import { AppService } from '../_services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private appService: AppService,private router: Router) { }

  ngOnInit(): void {
  }

  log1(){
    this.appService.setUserLoggedIn(true)
  }

}
