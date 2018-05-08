export class Image {

    public src: string;
    public shortDesc: string;
    public width: number;
    public height: number;

    constructor(input: Object) {
        this.src = input['src'];
        this.shortDesc = input['shortDesc'];
        this.width = input['width'];
        this.height = input['height'];
    }
}