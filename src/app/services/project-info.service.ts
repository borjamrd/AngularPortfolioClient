import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {
  urlProjects: string = environment.apiUrl + '/projects'
  urlTags: string = environment.apiUrl + 'projects/tags'

  constructor(
    private http: HttpClient,
  ) { }
  getProjectInfo(id: any) {
    return this.http.get(`${this.urlProjects}/${id}`)
  }
  // getProjectByTag(tags: any){
  //   return this.http.post(`${this.urlTags}`, tags)
  // }
}
