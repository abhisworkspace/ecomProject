import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type/data-type';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isToastShow = false;
  isLoginError = new EventEmitter<boolean>(false);
  isLoginSuccess = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private route: Router) {}

  userSignup(data: SignUp) {
    return this.http
      .post(`http://localhost:3000/seller`, data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.route.navigate(['seller-home']);
      });
  }

  userLogin(data: Login) {
    this.http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        console.log(result);
        if (result && result.body && result.body.length) {
          console.log('user logged in');
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.route.navigate(['seller-home']);
          this.isLoginSuccess.emit(true);
          this.isLoginError.emit(false);
        } else {
          console.log('user logged Failed');
          this.isLoginError.emit(true);
          this.isLoginSuccess.emit(false);
        }
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home']);
    }
  }
}
