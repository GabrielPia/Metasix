import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/Objects/Animal';

@Component({
  selector: 'app-confirmation-panel',
  templateUrl: './confirmation-panel.component.html',
  styleUrls: ['./confirmation-panel.component.scss']
})
export class ConfirmationPanelComponent implements OnInit {

  @Input() animal:Animal;
  @Output() foundAnimal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  confirmAnimal(confirm:boolean){
    this.foundAnimal.emit(confirm);
  }

}
