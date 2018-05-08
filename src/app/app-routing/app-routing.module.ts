import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Components
import { StoreComponent } from './../store/store.component';

// Resolve
import { ProductsResolve } from '../shared/resolve/products.resolve.service';

const routes: Routes = [
  { path: '', component: StoreComponent, resolve: { products: ProductsResolve } }
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
