import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/Objects/Animal';
import { AnimalDict } from 'src/app/Objects/AnimalDict';

@Component({
  selector: 'app-questions-panel',
  templateUrl: './questions-panel.component.html',
  styleUrls: ['./questions-panel.component.scss']
})
export class QuestionsPanelComponent implements OnInit {

  @Output() showSuccessPanel = new EventEmitter<boolean>();
  @Output() reset = new EventEmitter();
  public animalsDict: AnimalDict[] = [];
  public confirmAnimal: Animal;
  public showAnimalConfirmationPanel: boolean;
  public showInsertAnimalPanel: boolean;
  public highlightButton:boolean;
  private index: number = 0;

  constructor() { }

  ngOnInit() {
    this.animalsDict.push(new AnimalDict('Vive na água', [new Animal('Tubarão', true), new Animal('Macaco', false)]));
  }

  getText() {
    return this.animalsDict[this.index].feature;
  }

  confirmFeature(hasFeature: boolean) {
    this.getAnimal(hasFeature)
    this.highlightButton = (hasFeature ? true : false);
  }

  insertAnimal(animalDict:AnimalDict){
    this.showInsertAnimalPanel = false;
    let previousAnimal:Animal = new Animal(this.confirmAnimal.name, false)
    animalDict.animals.push(previousAnimal)
    console.log(animalDict)
    this.animalsDict.push(animalDict)
    this.updateDict(previousAnimal, animalDict.feature);
    this.index = 0;
    // this.reset.emit();
  }

  foundAnimal(found: boolean) {
    if (found)
      this.showSuccessPanel.emit(found);
    else {
      this.showAnimalConfirmationPanel = false;
      this.showInsertAnimalPanel = true;
    }
  }

  getAnimal(hasFeature) {
    this.animalsDict[this.index].animals.forEach((animal: Animal) => {
      if (animal.hasFeature == hasFeature) {
        console.log(animal)
        if (animal.nextFeature == undefined || animal.nextFeature == '') {
          this.confirmAnimal = animal;
          this.showAnimalConfirmationPanel = true;
        }
        else {
          this.index = this.animalsDict.findIndex((animalDict:AnimalDict) => {
            return animal.nextFeature == animalDict.feature;
          });
        }
      }
    });
  }

  updateDict(previousAnimal:Animal, feature:string){
    this.animalsDict[this.index].animals.forEach((animal:Animal) => {
      if(animal.name == previousAnimal.name)
        animal.nextFeature = feature;
    });
  }
}
