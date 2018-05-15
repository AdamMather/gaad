import { Injectable, HostListener } from '@angular/core';
import { Address } from './address.model';
import { Products } from './products.model';
import { ProductItem } from './productItem.model';

@Injectable()
export class Global {

    public path: string;                // breadcrumb navigation
    public showModal: boolean;

    public products: Array<Products>;   // product range
    public productItem: ProductItem;    // basket item

    public basket: Array<ProductItem>; // array of basket items
    public basketCost: number;
    public shippingCost: number;

    public shipping: Address;
    public shipment: Address;
    public billing: Address;

    constructor() {
        //
        this.showModal = false;
        this.shippingCost = 3;
    }

    modalStatus(): boolean {
      return this.showModal;
    }

    getBasketContents(): string {

        let stringBuilder: string = '';
        let numOfItems: string = 'you currently have #num items in the shopping basket';
        let basketCost: string = 'at a total basket cost of £' + this.basketCost;
        let totalCost: string = 'the shipping cost is £' + this.shippingCost + ', bringing the total cost to £' + Number(this.basketCost+this.shippingCost);
    
        if (this.basket.length == 0) {
          stringBuilder = 'the basket is empty';
        } else {
          stringBuilder = 'there ';
          this.basket.map((item, index) => {
            if (index == 0) {
              stringBuilder = (item.quantity == 1) ? stringBuilder + 'is ' : stringBuilder + 'are ';
            }
            if (this.basket.length != 1 && index == this.basket.length - 1) stringBuilder = stringBuilder + ' and ';
            stringBuilder = stringBuilder + item.quantity + ' ';
            stringBuilder = (item.quantity == 1) ? stringBuilder + 'item ' : stringBuilder + 'items ';
            stringBuilder = stringBuilder + ' of ' + item.productName;
    
            if (index < this.basket.length - 2) stringBuilder = stringBuilder + ', ';
          });
          stringBuilder = stringBuilder + ' ' + basketCost + ' ' + totalCost;
        };
        //
        return stringBuilder;
      }

      getBasketTotal(): string {

        let stringBuilder: string = '';

        if (this.basket.length == 0) {
          stringBuilder = 'the basket is empty';
        } else {
          stringBuilder = 'the total cost of this basket, including a shipping cost of £' + this.shippingCost  + ', is £' + Number(this.basketCost+this.shippingCost);
        }
        return stringBuilder;
      }
}