import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  urlLead: string = environment.apiUrl + '/leads/lead'

  constructor(
    private http: HttpClient
  ) { }


  addNewLead(data: any) {
    return this.http.post(this.urlLead, data)
  }
}
