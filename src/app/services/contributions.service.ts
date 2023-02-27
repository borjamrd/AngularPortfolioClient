import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {
  urContributions: string = environment.apiUrl + '/contributions'

  constructor(
    private http: HttpClient
  ) { }

  getProfessionalContributions() {
    const query = `query {
      user(login: "${environment.githubUsernamePro}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }`;

    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${environment.githubTokenPro}`
    })

    return this.http.post('https://api.github.com/graphql', { query }, { headers })
  }

  getPersonalContributions() {
    const query = `query {
      user(login: "${environment.githubUsernamePersonal}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }`;

    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${environment.githubTokenPersonal}`
    })

    return this.http.post('https://api.github.com/graphql', { query }, { headers })
  }



}
