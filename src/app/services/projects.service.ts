import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url: string = 'https://bmrd-portfolio-server.herokuapp.com/projects'
  prov_url: string = 'http://localhost:4500/projects';
  prov_url_tags: string = 'http://localhost:4500/projects/tags';
  constructor(
    private _http: HttpClient
  ) {
    this.getAllProjects()
  }
  getAllProjects() {
    return this._http.get(this.prov_url)
  }
  getProjectByTag(data: any) {
    return this._http.post(this.prov_url_tags, data)
  }

}
