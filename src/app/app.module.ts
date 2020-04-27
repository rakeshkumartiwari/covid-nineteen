import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatChipsModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CovidRecordComponent } from './statewise-records/covid-record/covid-record.component';
import { StatewiseRecordsComponent } from './statewise-records/statewise-records.component';
import { ChartReportComponent } from './statewise-records/chart-report/chart-report.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './statewise-records/routes';

@NgModule({
  declarations: [
    AppComponent,
    StatewiseRecordsComponent,
    CovidRecordComponent,
    ChartReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
