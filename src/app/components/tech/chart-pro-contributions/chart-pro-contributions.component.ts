import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Chart } from 'chart.js';
import { ContributionsService } from 'src/app/services/contributions.service';

@Component({
  selector: 'chart-pro-contributions',
  templateUrl: './chart-pro-contributions.component.html',
  styleUrls: ['./chart-pro-contributions.component.scss']
})
export class ChartProContributionsComponent implements OnInit {
  @Output() total = new EventEmitter<string>();
  public chartPro: any;
  public labels: any[] = []
  public data: any[] = []
  constructor(
    private _cService: ContributionsService,
  ) {

  }

  ngOnInit(): void {


    this._cService.getProfessionalContributions().subscribe((resp: any) => {
      // console.log(resp.data.user.contributionsCollection.contributionCalendar.totalContributions)
      this.total.emit(resp.data.user.contributionsCollection.contributionCalendar.totalContributions);
      const weeks = resp.data.user.contributionsCollection.contributionCalendar.weeks;
      const contributionsByDay = weeks
        .flatMap((week: any) => week.contributionDays)
        .reduce((accumulator: any, current: any) => {
          const date = current.date
          const count = current.contributionCount;
          if (count > 0) {
            accumulator[date] = count
          }
          return accumulator
        }, {})

      this.labels = Object.keys(contributionsByDay)
      this.data = Object.values(contributionsByDay)

      this.createChart();
    })

  }

  createChart() {

    this.chartPro = new Chart("contributionsChartPro", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labels,
        datasets: [
          {
            label: "Contributions",
            data: this.data,
            backgroundColor: '#DF583B'
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
            text: 'Professional Github contributions'
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
