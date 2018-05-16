import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Global } from './../core/global.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  public shippingAddress: string;
  public billingAddress: string;

  constructor(
    private global: Global,
    private router: Router
  ) { }

  ngOnInit() {
    // store current url path
    this.global.path = this.router.url;
    
  }

}
