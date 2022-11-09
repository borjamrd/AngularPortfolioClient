import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  urlResults = environment.apiUrl + '/projects/name'
  constructor(
    private http: HttpClient,
  ) {

  }

  searchHeader(data: any) {
    return this.http.post(this.urlResults, data)
  }
}
