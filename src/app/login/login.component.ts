import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AppService } from '../_services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  loginUserData = {
    username : null,
    password : null
  }
  
  constructor(private _auth: AuthService,private router: Router,private appService: AppService) { }



  ngOnInit(): void {
  }

  is_error = false;

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {console.log(res)
        localStorage.setItem('token', res.token)
        this.appService.setUserLoggedIn(true)
        this.router.navigate(['/homepage'])
      },
      err => {
        this.is_error = true;
        window.alert("We are facing this error ," + err["error"]);
      }
    ) 
  }

  

}
