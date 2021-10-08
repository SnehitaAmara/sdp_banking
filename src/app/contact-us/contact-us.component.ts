import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  conUserData= {
    firstname : null,
    lastname : null,
    email : null,
    subject : null,
  }

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  contactUser() {
    this._auth.contactUser(this.conUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
