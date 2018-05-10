import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Global } from '../core/global.model';
import { Products } from '../core/products.model';
import { ProductsService } from '../shared/service/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public records: Observable<Array<Products>>;
  
  constructor(
    private global: Global,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // store current url path
    this.global.path = this.router.url;
    // fetch product records
    this.global.products = this.route.snapshot.data['products'];

  }

  getProductDescriptionLabel(itemDescription: string): string {
    
    return "This button will open the product page for " + itemDescription;
  }

}