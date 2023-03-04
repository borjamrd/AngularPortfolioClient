import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {

  constructor(
    private http: HttpClient
  ) { }

  getProfessionalContributions() {
    return this.http.get(environment.apiUrl + '/contributions/pro')
  }

  getPersonalContributions() {
    return this.http.get(environment.apiUrl + '/contributions/personal')
  }



}
