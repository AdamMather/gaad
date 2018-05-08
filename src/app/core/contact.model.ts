export class Contact {

    public _id: string;
    public contactPoint: string;
    public newsAndOffers: string;


    constructor(input: Object) {
        this._id = input['_id'];
        this.contactPoint = input['contactPoint'];
        this.newsAndOffers = input['newsAndOffers']
    }
}