import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  balUserData = {
    fullname : "",
    email : "",
    address : "",
    city : "",
    state : "",
    zip : "",
    name_card : "",
    card_num : "",
    exp_mon : "",
    exp_year : "",
    cvv : ""
  }

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  balanceUser() {
    this._auth.balanceUser(this.balUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
