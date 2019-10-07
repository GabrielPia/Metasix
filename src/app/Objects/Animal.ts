
export class Animal{
    name:string
    hasFeature:boolean;
    nextFeature:string

    constructor(name:string,hasFeature:boolean, nextFeature?:string){
        this.name = name;
        this.hasFeature = hasFeature;
        this.nextFeature = nextFeature;
    }
}