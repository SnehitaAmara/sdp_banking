import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _accUrl = "http://localhost:3000/api/account";
  private _conUrl = "http://localhost:3000/api/contact";
  private _balUrl = "http://localhost:3000/api/balance";
  


  constructor(private http: HttpClient) { }

  registerUser(user: {}) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  accountUser(account: {}){
    return this.http.post<any>(this._accUrl, account)
  }

  contactUser(contact: {}) {
    return this.http.post<any>(this._conUrl, contact)
  }

  balanceUser(balance: {}) {
    return this.http.post<any>(this._balUrl, balance)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
