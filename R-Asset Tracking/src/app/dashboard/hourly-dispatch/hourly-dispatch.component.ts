import { Component, ViewChild } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatSlider, MatSliderModule} from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexMarkers
} from "ng-apexcharts";
import { range } from "rxjs";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-hourly-dispatch',
  standalone: true,
  imports: [ NgApexchartsModule, CalendarModule,InputSwitchModule,
    FormsModule , MatCardModule, MatButtonModule,MatSliderModule],
  templateUrl: "./hourly-dispatch.component.html",
  styleUrls: ["./hourly-dispatch.component.css"]
})
export class HourlyDispatchComponent {
  date: Date | undefined;
  checked: boolean = true;
  // value!: number;
  @ViewChild('timeSlider') timeSlider!: MatSlider;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  max = 24;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Asset In",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148,100,52,89,10, 41, 35, 51, 49, 62, 69, 91, 148,100,52,89],
          color:'#ff7b7b',
        }
      ],
      chart: {
        height: 290,
        type: "area",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
        }
      },
      markers: {
        size: 4,
        hover: {
          size: 6
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        width:2,
      },
      title: {
        text: "",
        align: "left",

      },

      grid: {
        row: {
          colors: ["#ffbaba", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.1
        }
      },
      xaxis: {
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",

        ]
      }
    };


  }
  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    // You can safely access timeSlider properties or methods here
    console.log(this.timeSlider);
  }

  onChangeRange(slider: MatSlider): void {
    // Implement your change event logic here
  }

}
