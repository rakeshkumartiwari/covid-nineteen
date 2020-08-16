import { Component, OnInit } from '@angular/core';
import { StatewiseService } from '../statewise.service';


@Component({
  selector: 'app-statewise-records',
  templateUrl: './statewise-records.component.html',
  styleUrls: ['./statewise-records.component.css']
})
export class StatewiseRecordsComponent implements OnInit {
  statewiseData: any;

  constructor(public statewiseService: StatewiseService) { }

  ngOnInit() {

    this.statewiseService.getData().subscribe(data => {
      this.statewiseData = data;
    });

    this.statewiseService.getWorldData().subscribe(data => {
      // console.log('Data: ', data);
    });

  }
}
