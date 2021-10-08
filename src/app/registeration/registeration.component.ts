import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  registerUserData = {
    username : null,
    password : null,
    phn_num : null,
    email : null,
  }
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
