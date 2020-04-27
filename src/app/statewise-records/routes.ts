import { Routes } from '@angular/router';
import { CovidRecordComponent } from './covid-record/covid-record.component';
import { ChartReportComponent } from './chart-report/chart-report.component';
import { StatewiseRecordsComponent } from './statewise-records.component';

export const appRoutes: Routes = [
    { path: 'listView', component: StatewiseRecordsComponent },
    { path: 'chartView', component: ChartReportComponent },
    {path: '', redirectTo: '/listView', pathMatch: 'full'}
];
