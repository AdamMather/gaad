import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Components
import { StoreComponent } from './../store/store.component';
import { ProductComponent } from './../product/product.component';
import { BasketComponent } from './../basket/basket.component';
import { CheckoutComponent } from './../checkout/checkout.component';
import { SummaryComponent } from './../summary/summary.component';
import { ConfirmationComponent } from './../confirmation/confirmation.component';

// Resolve
import { ProductsResolve } from '../shared/resolve/products.resolve.service';

const routes: Routes = [
  { path: '', component: StoreComponent, resolve: { products: ProductsResolve } },
  { path: 'product/:id', component: ProductComponent, resolve: { products: ProductsResolve } },
  { path: 'basket', component: BasketComponent, resolve: { products: ProductsResolve } },
  { path: 'checkout', component: CheckoutComponent, resolve: { products: ProductsResolve } },
  { path: 'summary', component: SummaryComponent, resolve: { products: ProductsResolve } },
  { path: 'confirmation', component: ConfirmationComponent, resolve: { products: ProductsResolve } }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
