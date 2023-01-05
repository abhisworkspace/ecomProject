import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { Product } from '../data-type/data-type';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  productList: undefined | Product[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.paramMap.get('query');
    console.log(query);
    if (query) {
      this.productService.searchProducts(query).subscribe((result) => {
        if (result) {
          console.log(result);
          this.productList = result;
        }
      });
    }
  }
}
