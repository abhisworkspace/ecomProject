import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/data-type/data-type';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss'],
})
export class SellerAddProductComponent implements OnInit {
  productAddMessage = false;
  constructor(private productService: ProductService, private route: Router) {}

  ngOnInit(): void {}

  handleAddProduct(data: Product) {
    console.log(data);
    this.productService.addProduct(data).subscribe((result) => {
      console.log(result);
      if (result) {
        this.productAddMessage = true;
      }
      setTimeout(() => (this.productAddMessage = false), 3000);
      this.route.navigate(['/seller-home']);
    });
  }
}
