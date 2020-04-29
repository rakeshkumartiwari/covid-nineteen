import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { StatewiseService } from 'src/app/statewise.service';
@Component({
  selector: 'app-chart-report',
  templateUrl: './chart-report.component.html',
  styleUrls: ['./chart-report.component.css']
})
export class ChartReportComponent implements OnInit {

  canvas: any;
  ctx: any;
  statewiseData: any[];
  data: any[];
  labels: any[];
  colors: any[];

  constructor(private statewiseService: StatewiseService) { }

  ngOnInit() {
    this.statewiseService.getData().subscribe(records => {
      if (records) {
        this.statewiseData = records.slice(1);
        const d = [];
        const l = [];
        const c = [];
        this.statewiseData.forEach((item) => {
          d.push(+item.confirmed);
          l.push(item.state);
          c.push(this.makeRandomColor());
        });
        this.data = d;
        this.labels = l;
        this.colors = c;
        this.chartMaker();
      }

    });
  }

  chartMaker() {
    console.log('data : ', this.data);
    console.log('labels : ', this.labels);
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Highest One',
          data: this.data,
          backgroundColor: this.colors,
          borderWidth: 1
        }]
      },
      options: {
        scaleShowValues: true,
        responsive: true,
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            stacked: true,
            gridLines: {
              display: false
            }
          }],
        }
      }
    });
  }
  makeRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
