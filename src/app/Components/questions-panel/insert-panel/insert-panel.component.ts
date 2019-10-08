import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Animal } from 'src/app/Objects/Animal';
import { AnimalDict } from 'src/app/Objects/AnimalDict';

@Component({
  selector: 'app-insert-panel',
  templateUrl: './insert-panel.component.html',
  styleUrls: ['./insert-panel.component.scss']
})
export class InsertPanelComponent implements OnInit {

  public name:string;
  public feature:string;

  @Output() insert = new EventEmitter<AnimalDict>();
  @Input() previousAnimal:Animal;

  constructor() { }

  ngOnInit() {
  }

  insertAnimal(){
    let animal:Animal = new Animal(this.name,true)
    let animalDict:AnimalDict = new AnimalDict(this.feature,[animal])
    this.insert.emit(animalDict);
  }



}
