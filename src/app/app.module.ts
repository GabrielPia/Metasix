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
import { ConfirmationPanelComponent } from './Components/questions-panel/confirmation-panel/confirmation-panel.component';
import { InsertPanelComponent } from './Components/questions-panel/insert-panel/insert-panel.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePanelComponent,
    QuestionsPanelComponent,
    MainFormComponent,
    SuccessPanelComponent,
    ConfirmationPanelComponent,
    InsertPanelComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
