export class Payment {

    public _id: string;
    public cardnumber: string;
    public name: string;
    public expiry: string;
    public cvv: string;
    public bankcard: boolean;
    public paypal: boolean;
    public shippingaddr: boolean;
    public billingaddr: boolean;

    constructor(input: Object) {
        this._id = input['_id'];
        this.name = input['name'];
        this.expiry = input['expiry'];
        this.cvv = input['cvv'];
        this.bankcard = input['bankcard'];
        this.paypal = input['paypal'];
        this.shippingaddr = input['shippingaddr'];
        this.billingaddr = input['billingaddr'];
    }
}