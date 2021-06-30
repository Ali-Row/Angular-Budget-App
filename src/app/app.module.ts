import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetComponent } from './components/budget.component';
import { FormsModule } from '@angular/forms';
import { RoundDownPipe } from './pipes/round-down.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    RoundDownPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
