import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Chart from 'chart.js/auto';
import { ContributionsService } from 'src/app/services/contributions.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'chart-personal-contributions',
  templateUrl: './chart-contributions.component.html',
  styleUrls: ['./chart-contributions.component.scss']
})
export class ChartContributionsComponent implements OnInit {
  @Output() total = new EventEmitter<string>();
  public chartPersonal: any;
  public labels: any[] = []
  public data: any[] = []
  constructor(
    private _cService: ContributionsService,
  ) {

  }

  ngOnInit(): void {


    this._cService.getPersonalContributions().subscribe((resp: any) => {
      console.log(resp)

      this.labels = resp.labels
      this.data = resp.data
      this.total.emit(resp.total)

      this.createChart();
    })

  }
  createChart() {

    this.chartPersonal = new Chart("contributionsChartPersonal", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labels,
        datasets: [
          {
            label: "Contributions",
            data: this.data,
            backgroundColor: '#00D1B2'
          },

        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false //This will do the task
          },
          subtitle: {
            display: true,
            text: 'Personal Github contributions'
          }
        },
        // aspectRatio: 2.5,
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0.5,
            loop: true
          }
        },
        scales: {
          y: {
            grid: {
              drawOnChartArea: false
            }
          },
          x: {
            grid: {
              drawOnChartArea: false
            }
          }
        },

      }

    });
  }
}
