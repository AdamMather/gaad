import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { BasketComponent } from './basket/basket.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

// Core Model
import { Global } from './core/global.model';

// Core Service
import { ProductsService } from './shared/service/products.service';

// Core Resolve
import { ProductsResolve } from './shared/resolve/products.resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ProductComponent,
    BasketComponent,
    ConfirmationComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDK8zuVo2bqA-K2PX08tcZUQgFmY5-fTHg'
    }),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    Global,
    ProductsService,
    ProductsResolve
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
