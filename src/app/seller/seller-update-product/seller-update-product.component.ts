import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/data-type/data-type';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss'],
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | Product;
  productEditMessage = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private route: Router
  ) {}

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('id');
    console.log(productId);
    if (productId) {
      this.productService.getProduct(productId).subscribe((result) => {
        if (result) {
          console.log(result);
          this.productData = result;
        }
      });
    }
  }

  handleEditProduct(data: Product) {
    console.log(data);
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.productService.editProduct(data).subscribe((result) => {
      if (result) {
        console.log(result);

        this.productEditMessage = true;
      }
      setTimeout(() => (this.productEditMessage = false), 3000);
      this.route.navigate(['/seller-home']);
    });
  }
}
