import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-covid-record',
  templateUrl: './covid-record.component.html',
  styleUrls: ['./covid-record.component.css']
})
export class CovidRecordComponent implements OnInit {

  private _statewiseData: any[];

  total = {
    state: '',
    active: '',
    confirmed: '',
    deaths: '',
    lastupdatedtime: '',
    recovered: ''
  };

  @Input() set statewiseData(value: any[]) {
    if (value && value.length) {
      this.total = {
        state: value[0].state,
        active: value[0].active,
        confirmed: value[0].confirmed,
        deaths: value[0].deaths,
        lastupdatedtime: value[0].lastupdatedtime,
        recovered: value[0].recovered
      };
      this._statewiseData = value.slice(1);
    }
  }

  get statewiseData() {
    return this._statewiseData;
  }

  constructor() { }

  ngOnInit() {

  }

}
