import { Component, OnInit } from '@angular/core';
import { AppService } from '../_services/app.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent implements OnInit {

  accUserData= {
    firstname : null,
    lastname : null,
    email : null,
    location : null,
    accountnum : null,
  }

  constructor(private appService: AppService,private _auth: AuthService) { }

  ngOnInit(): void {
  }

  accountUser() {
    this._auth.accountUser(this.accUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
