
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartOptions } from 'chart.js/auto';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cust-details',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css']
})

export class CustDetailsComponent {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
    createChart(){

    this.chart = new Chart("MyChart", {
      type: 'doughnut', 
      data: {
         datasets: [{
         label: '',
         data: [240, 432, 134],
         backgroundColor: [
          '#FDC6C6',
          '#FD6363',
          '#FDD7C6'
        ],
        hoverOffset: 10,
        borderRadius: 10
      }],
      labels: ['Hyundai','RNAIPL','Daimler',],

      },

      options: {
        aspectRatio:0.5,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            align:'start',
            display: true,
          labels: {
          
            boxWidth: 12, // Adjust width of colored box
            padding: 5, // Adjust padding around each legend item
          }

          },
          title: {
              display: true,
              // text: 'Custom Chart Title', //Chart Title

          }
      }
      }


    });
  }


}
