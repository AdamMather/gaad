import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Products } from '../../core/products.model';

@Injectable()
export class ProductsService {

    public record: any;

    constructor(
        private http: Http,
        private httpClient: HttpClient
    ) { }

    // service methods go here
    getAllRecords(): Observable<any> {

        // set json header information
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        // gather request options
        let options = new RequestOptions({ headers: headers });

        // return all records to the component
        return this.http.get('/api/portal/products', options)
            .map(response => response.json().map(record => new Products(record)));
    }
}
