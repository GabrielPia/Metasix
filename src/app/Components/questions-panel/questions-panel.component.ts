import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Objects/Animal';
import { AnimalDict } from 'src/app/Objects/AnimalDict';

@Component({
  selector: 'app-questions-panel',
  templateUrl: './questions-panel.component.html',
  styleUrls: ['./questions-panel.component.scss']
})
export class QuestionsPanelComponent implements OnInit {

  public animalsDict:AnimalDict[] = [];
  private index:number = 0;

  constructor() { }

  ngOnInit() {
    this.animalsDict.push(new AnimalDict('Aquático', [new Animal('Tubarão', true), new Animal('Macaco', false)]));
  }

  getText(){
    return this.animalsDict[this.index].feature;
  }
}
