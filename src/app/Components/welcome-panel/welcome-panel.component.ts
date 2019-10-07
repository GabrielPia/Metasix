import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-panel',
  templateUrl: './welcome-panel.component.html',
  styleUrls: ['./welcome-panel.component.scss']
})
export class WelcomePanelComponent implements OnInit {

  @Output() startGame = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  start(){
    this.startGame.emit(true);
  }

}
