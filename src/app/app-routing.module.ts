import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller/seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { AuthGuard } from './_auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'seller-add-product',
    component: SellerAddProductComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
