import { Image } from './image.model';
import { ItemAttributes } from './itemAttributes.model';

export class ProductItem {

    public _id: string;
    public productName: string;
    public productImage: Image;
    public productDescription: string;
    public productPrice: number;
    public itemAttributes: ItemAttributes;
    public quantity: number;
    public quantityCost: number;


    constructor(input: Object) {
        this._id = input['_id'];
        this.productName = input['productName'];
        this.productImage = (input['productImage']) ? new Image(input['productImage']) : null;
        this.productDescription = input['productDescription'];
        this.productPrice = input['productPrice'];
        this.itemAttributes = (input['itemAttributes']) ? new ItemAttributes(input['itemAttributes']) : null;
        this.quantity = input['quantity'];
        this.quantityCost = input['quantityCost'];
    }
}