import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Global } from './../core/global.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    private global: Global,
    private router: Router
  ) { }

  ngOnInit() {

    // store current url path
    this.global.path = this.router.url;

  }

}
