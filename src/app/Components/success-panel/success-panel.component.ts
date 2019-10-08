import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-panel',
  templateUrl: './success-panel.component.html',
  styleUrls: ['./success-panel.component.scss']
})
export class SuccessPanelComponent implements OnInit {

  @Output() reset = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  resetGame(){
    this.reset.emit();
  }

}
