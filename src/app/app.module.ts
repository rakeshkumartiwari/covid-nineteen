import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatChipsModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CovidRecordComponent } from './statewise-records/covid-record/covid-record.component';
import { StatewiseRecordsComponent } from './statewise-records/statewise-records.component';

@NgModule({
  declarations: [
    AppComponent,
    StatewiseRecordsComponent,
    CovidRecordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
