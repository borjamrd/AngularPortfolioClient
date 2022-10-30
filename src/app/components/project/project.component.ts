import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectModel } from 'src/app/models/project';
import { ProjectInfoService } from 'src/app/services/project-info.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: string = ''
  img: string = ''
  project: ProjectModel = {
    _id: '',
    name: '',
    url: '',
    tags: [],
    img: '',
    subtitle: '',
    short_description: '',
    full_description: '',
    date: '',
    github: ''
  }
  createdAt = new Date()
  tags: any[] = []
  relatedProjects: any = []
  constructor(
    private _projectInfo: ProjectInfoService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _projects: ProjectsService,
    private _activatedRoute: ActivatedRoute,
  ) {
    
    this._activatedRoute.params.subscribe((resp: any) => {
      this.id = resp.idproject
    })
    this._projectInfo.getProjectInfo(this.id).subscribe({
      next: (resp: any) => {
        console.log(resp)
        this.project = resp.project
        this.tags = resp.project.tags
        this.img = resp.project.img
        this.createdAt = resp.project.createdAt
        let data = {
          tags: this.tags
        }
        this.getRelatedProjects(data)
      },
      error: ((err: any) => {
        console.log(err)
      })
    })

 
  }

  ngOnInit(): void {
  }
  getRelatedProjects(data: any) {
    this._projects.getProjectByTag(data).subscribe({
      next: ((resp: any) => {
        // console.log('related: ', resp)
        this.relatedProjects = resp.projects
      }),
      error: ((err: any) => {
        console.log('related project post erro: ', err)
      })
    })
  }

  goToProject(projectId: any) {
    this._router.navigate([`/${projectId}`],);
  }
}

