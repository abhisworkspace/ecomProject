import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data-type/data-type';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss'],
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | Product[];
  productDeleteMessage = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProductList();
  }

  getAllProductList() {
    this.productService.getAllProducts().subscribe((result) => {
      console.log(result);
      if (result) {
        this.productList = result;
      }
    });
  }

  editProduct(id: number) {
    // this.productService.editProduct(id).subscribe((result) => {
    //   if (result) {
    //     console.log(result);
    //   }
    // });
  }

  deleteProduct(id: number) {
    // this.productService.deleteProduct(id).subscribe((result) => {
    //   console.log(result);
    //   if (result) {
    //     this.productDeleteMessage = true;
    //     this.getAllProductList();
    //   }
    //   setTimeout(() => (this.productDeleteMessage = false), 3000);
    // });
  }
}
