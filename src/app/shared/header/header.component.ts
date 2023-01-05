import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/data-type/data-type';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName = '';
  searchResult: undefined | Product[];

  constructor(private route: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.events.subscribe((result: any) => {
      if (result.url) {
        if (localStorage.getItem('seller') && result.url.includes('seller')) {
          this.menuType = 'seller';
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        } else if (
          localStorage.getItem('user') &&
          result.url.includes('user')
        ) {
          console.log('Inside User');
          this.menuType = 'user';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.productService.searchProducts(element.value).subscribe((result) => {
        if (result) {
          if (result.length > 5) {
            result.length = 5;
          }
          this.searchResult = result;
        }
      });
    }
  }
  hideSearch() {
    this.searchResult = undefined;
  }

  submitSearch(value: string) {
    // if (this.searchResult) {
    this.route.navigate([`/searchList/${value}`]);
    // }
  }

  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
}
