import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../../data-type/data-type';
import { SellerService } from '../../_services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss'],
})
export class SellerAuthComponent implements OnInit {
  isLoginShow = false;
  isErrorShow = false;
  isSuccessShow = false;

  constructor(private seller: SellerService, private route: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signup(data: SignUp): void {
    this.seller.userSignup(data);
  }

  login(data: SignUp): void {
    console.log(data);
    this.seller.userLogin(data);

    this.seller.isLoginError.subscribe((isErr) => {
      console.log(isErr);
      if (isErr) {
        this.isErrorShow = true;
      }
    });

    this.seller.isLoginSuccess.subscribe((isSuccess) => {
      console.log('isSuccess', isSuccess);
      if (isSuccess) {
        this.isSuccessShow = true;
      }
    });
  }

  switchLoginSignup() {
    this.isLoginShow = !this.isLoginShow;
  }
}
