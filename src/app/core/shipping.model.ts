export class Shipping {

    public _id: string;
    public firstName: string;
    public lastName: string;
    public addrLine1: string;
    public addrLine2: string;
    public city: string;
    public postcode: string;
    public save: boolean;

    constructor(input: Object) {
        this._id = input['_id'];
        this.firstName = input['firstName'];
        this.lastName = input['lastName'];
        this.addrLine1 = input['addrLine1'];
        this.addrLine2 = input['addrLine2'];
        this.city = input['city'];
        this.postcode = input['postcode'];
        this.save = input['save'];
    }
}