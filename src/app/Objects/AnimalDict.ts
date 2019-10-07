import { Animal } from './Animal';

export class AnimalDict{
    feature:string
    animals:Animal[]

    constructor(feature:string, animals:Animal[]){
        this.feature = feature;
        this.animals = animals;
    }
}