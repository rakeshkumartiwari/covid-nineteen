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
  colors = ['#ff0000', '#00FFFF', '#7FFFD4', '#0000FF', '#8A2BE2', '#7FFF00', '#5F9EA0', '#FF7F50',
    '#008B8B', '#B8860B', '#006400', '#BDB76B', '#556B2F', '#E9967A', '#483D8B', '#FF1493',
    '#00BFFF', '#FFD700', '#CD5C5C', '#ADFF2F', '#F0E68C', '#FFB6C1', '#87CEFA', '#800000',
    '#BA55D3', '#00FA9A', '#C71585', '#191970', '#808000', '#FFA500', '#DB7093', '#AFEEEE',
    '#CD853F', '#800080', '#BC8F8F', '#FA8072', '#FFFF00'];

  constructor(private statewiseService: StatewiseService) { }

  ngOnInit() {
    this.statewiseService.getData().subscribe(records => {
      if (records) {
        this.statewiseData = records.slice(1);
        const d = [];
        const l = [];
        this.statewiseData.forEach((item) => {
          d.push(+item.confirmed);
          l.push(item.state);
        });
        this.data = d;
        this.labels = l;
        this.chartMaker();
      }

    });
  }

  chartMaker() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.data,
          backgroundColor: this.colors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }

}
