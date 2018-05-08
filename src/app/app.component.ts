import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from './core/global.model';

@Component({
  selector: 'app-root',
  host: { '(window:keydown)': 'onAppKey($event)' },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = 'A11y Jeans Store Demo';

  constructor(
    private global: Global,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onAppKey(event: any) {

    let element = document.getElementById('status');
    //
    console.log(event.keyCode);

    if (event.keyCode == 113) {
      console.log('you pressed key F2');
    }

    //
    if (event.keyCode == 66 && event.altKey) {
      console.log('you pressed key combination Alt+B');
      this.router.navigate(['/basket'], { relativeTo: this.route });
    }

    // 
    if (event.keyCode == 73 && event.altKey) {
      console.log('you pressed key combination Alt+I');
      if (element) {
        element.innerHTML = this.global.getBasketContents();
        element.focus();
      }
    }

    //
    if (event.keyCode == 83 && event.altKey) {
      console.log('you pressed key combination Alt+S');
      this.router.navigate(['/'], { relativeTo: this.route });
    }

    //
    if (event.keyCode == 84 && event.altKey) {
      console.log('you pressed key combination Alt+T');
      if (element) {
        element.innerHTML = this.global.getBasketTotal();
        element.focus();
      }
    }
  }
}
