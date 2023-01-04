import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../data-type/data-type';
import { ProductService } from '../_services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carouselData: undefined | Product[];
  isWished = false;
  allProductData: undefined | Product[];

  constructor(
    carouselConfig: NgbCarouselConfig,
    private productService: ProductService
  ) {
    carouselConfig.showNavigationArrows = true;
    carouselConfig.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.productService.popularProducts().subscribe((result) => {
      console.log(result);
      this.carouselData = result;
    });

    this.productService.getAllProducts().subscribe((result) => {
      if (result) {
        this.allProductData = result;
      }
    });
  }

  wishList() {
    this.isWished = !this.isWished;
  }
}
