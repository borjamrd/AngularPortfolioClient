import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {
  url: string = 'https://bmrd-portfolio-server.herokuapp.com/projects'
  prov_url: string = 'http://localhost:4500/projects';
  prov_url_tags: string = 'localhost:4500/projects/tags'

  constructor(
    private http: HttpClient,
  ) { }
  getProjectInfo(id: any) {
    return this.http.get(`${this.prov_url}/${id}`)
  }
  // getProjectByTag(tags: any){
  //   return this.http.post(`${this.prov_url_tags}`, tags)
  // }
}
