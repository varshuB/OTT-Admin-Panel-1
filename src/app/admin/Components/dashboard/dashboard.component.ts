import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    this.renderBarChart();
    this.renderPolarChart();
  //  this.renderLineChart();

  }


  renderBarChart(){
    const ctx = document.getElementById('myChart');

    new Chart("bar", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Cinemas',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor:[
          '  rgba(207, 198, 41)',
         ' rgba(48, 47, 128)'
          ],
          barPercentage:0.4,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  renderPolarChart(){
    const ctx = document.getElementById('myChart');
    new Chart("doughnut", {
      type: 'doughnut',
      data:{
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [200, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
     
    });
  }


  // renderdoughnutChart(){
  //   const ctx = document.getElementById('myChart');

  //   new Chart("doughnut", {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [{
  //         label: 'data-1',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor:[
  //           '  rgba(207, 198, 41)',
  //        ' rgba(48, 47, 128)'
  //         ],
  //         borderWidth: 1
  //       },
  //     ]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }

}
