import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  urlProjects: string = environment.apiUrl + '/projects';
  prov_url_tags: string = environment.apiUrl + '/projects/tags';
  prov_url_related: string = environment.apiUrl + '/projects/related';
  constructor(
    private _http: HttpClient
  ) {
    this.getAllProjects()
  }
  getAllProjects() {
    return this._http.get(this.urlProjects)
  }
  getProjectByTag(data: any) {
    return this._http.post(this.prov_url_tags, data)
  }
  getRelatedProject(data: any) {
    return this._http.post(this.prov_url_related, data)
  }

}
