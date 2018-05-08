import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Products } from '../../core/products.model';
import { ProductsService } from '../../shared/service/products.service';

@Injectable()
export class ProductsResolve implements Resolve<Array<Products>> {

        constructor(
        private errorHandler: ErrorHandler,
        private recordService: ProductsService) { }

    resolve(route: ActivatedRouteSnapshot) {

        return this.recordService.getAllRecords();

    }
}