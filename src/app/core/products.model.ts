import { Image } from './image.model';

export class Products {

    public _id: string;
    public productName: string;
    public productDescription: string;
    public productImage: Image;
    public productPrice: number;


    constructor(input: Object) {
        this._id = input['_id'];
        this.productName = input['productName'];
        this.productDescription = input['productDescription'];
        this.productImage = (input['productImage']) ? new Image(input['productImage']) : null;
        this.productPrice = input['productPrice'];
    }
}