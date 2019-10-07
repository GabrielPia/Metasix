import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  public welcomePanel:boolean = true;
  public questionsPanel:boolean = false;
  public successPanel:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  startGame(start:boolean){
    if(start){
      this.welcomePanel = false;
      this.questionsPanel = true;
      this.successPanel = false;
    }

  }

}
