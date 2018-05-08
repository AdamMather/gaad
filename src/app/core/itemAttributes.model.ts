export class ItemAttributes {

    public itemWaist: string;
    public itemLength: string;
    public itemColour: string;

    constructor(input: Object) {
        this.itemWaist = input['itemWaist'];
        this.itemLength = input['itemLength'];
        this.itemColour = input['itemColour'];
    }
}