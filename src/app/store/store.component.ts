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

    this.global.products = this.route.snapshot.data['products'];

  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: any): void {

    console.log(event.keyCode);
    let element = document.getElementById('status');

    //
    if (event.keyCode == 66 && event.altKey) {
      console.log('you pressed key combination Alt+B');
      this.router.navigate(['/basket'], { relativeTo: this.route });
    }
  }

}