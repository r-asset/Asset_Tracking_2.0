import { Component, ViewChild } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgApexchartsModule } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
import { Colors } from "chart.js";
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from "highcharts-angular";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};
import HC_3D from 'highcharts/highcharts-3d';
import HC_More from 'highcharts/highcharts-more';

HC_3D(Highcharts);
HC_More(Highcharts);

@Component({
  selector: 'app-monthly-dispatch',
  standalone: true,
  imports: [NgApexchartsModule,MatButtonModule,MatCardModule, HighchartsChartModule],
  templateUrl: './monthly-dispatch.component.html',
  styleUrls: ['./monthly-dispatch.component.css']
})

export class MonthlyDispatchComponent {
  @ViewChild("chart") chart!: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;
  Highcharts: typeof Highcharts = Highcharts;
  Options: any;

  constructor() {
    this.Options = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 20,
          beta: 0,
          depth: 50,
          viewDistance: 50
      }
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: [
          "01/2024",
          "02/2024",
          "03/2024",
          "04/2024",
          "05/2024",
          "06/2024",
          "07/2024",
          "08/2024",
          "09/2024",
          "10/2024",
          "11/2024",
          "12/2024",]
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [
        {
          name: 'Out',
          data: [13, 23, 20, 28, 13, 27,23,56,45,78,89,46],
          type: 'column',
          color: '#d991f2'
        },
        {
          name: 'In',
          data: [44, 55, 41, 67, 22, 43,89,99,56,21,78,56],
          type: 'column',
          color: '#f07f7f'
        },
        
       
       
      ],
      plotOptions: {
        column: {
          stacking: 'normal',
          borderRadius: 0,
          pointWidth: 30
        }
      },
      legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        itemStyle: {
          color: '#333'
        }
      },
      credits: {
        enabled: false
      }
    };
    
    // this.chartOptions = {
    //   series: [
    //     {
    //       name: "Asset IN",
    //       data: [44, 55, 41, 67, 22, 43,89,99,56,21,78,56],
    //       color:'#FD6363'
    //     },
    //     {
    //       name: "Asset OUT",
    //       data: [13, 23, 20, 28, 13, 27,23,56,45,78,89,46],
    //       color:'#FDD7C6'
    //     }
    //   ],
    //   chart: {
    //     type: "bar",
    //     height: 290,
    //     width: 450,
    //     stacked: true,
    //     toolbar: {
    //       show: true
    //     },
    //     zoom: {
    //       enabled: true
    //     }
    //   },
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       options: {
    //         legend: {
    //           position: "bottom",
    //           offsetX: -10,
    //           offsetY: 0
    //         }
    //       }
    //     }
    //   ],
    //   plotOptions: {
    //     bar: {
    //       horizontal: false
    //     }
    //   },
    //   xaxis: {
    //     type: "category",
    //     categories: [
    //       "01/2024",
    //       "02/2024",
    //       "03/2024",
    //       "04/2024",
    //       "05/2024",
    //       "06/2024",
    //       "07/2024",
    //       "08/2024",
    //       "09/2024",
    //       "10/2024",
    //       "11/2024",
    //       "12/2024",
    //     ]
    //   },
    //   legend: {
    //     position: "bottom",
    //     offsetX: 40,

    //   },
    //   fill: {
    //     opacity: 1
    //   }
    // };
  }
}


