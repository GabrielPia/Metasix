import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainFormComponent } from './Components/main-form/main-form.component';
import { WelcomePanelComponent } from './Components/welcome-panel/welcome-panel.component';
import { QuestionsPanelComponent } from './Components/questions-panel/questions-panel.component';
import { SuccessPanelComponent } from './Components/success-panel/success-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePanelComponent,
    QuestionsPanelComponent,
    MainFormComponent,
    SuccessPanelComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
