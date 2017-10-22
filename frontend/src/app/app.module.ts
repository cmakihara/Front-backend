import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaService } from './agenda/agenda.service';
@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
