import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
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
  isModalOpen: boolean = false;
  img: string = ''
  isDataLoading: boolean = false
  project: ProjectModel = {
    _id: '',
    name: '',
    urlProject: '',
    tags: [],
    projectImage: '',
    subtitle: '',
    short_description: '',
    full_description: '',
    date: '',
    github: ''
  }
  createdAt = new Date()
  tags: any[] = []
  relatedProjects: ProjectModel[] = []
  constructor(
    private _projectInfo: ProjectInfoService,
    private _activatedRoute: ActivatedRoute,
    private _projects: ProjectsService,
    private location: Location,

  ) {


  }

  ngOnInit(): void {
    this.getProjectInfo()
  }
  getProjectInfo() {
    this._activatedRoute.params.subscribe((resp: any) => {
      this.id = resp.idproject
      this._projectInfo.getProjectInfo(this.id)
        .subscribe({
          next: (resp: any) => {
            this.project = resp.project
            this.tags = resp.project.tags
            this.img = resp.project.img
            this.createdAt = resp.project.createdAt
            let data = {
              idProject: this.id,
              tags: this.tags
            }
            this.getRelatedProjects(data)
            window.scrollTo(0, 0)
          },
          error: ((err: any) => {
            console.log(err)
          })
        })

    })
  }
  getRelatedProjects(data: any) {
    this._projects.getRelatedProject(data)
      .pipe(
        finalize(() => {
          this.isDataLoading = false
        })
      )
      .subscribe({
        next: ((resp: any) => {
          // console.log('related: ', resp)
          this.relatedProjects = resp.projects
        }),
        error: ((err: any) => {
          console.log('related project post erro: ', err)
        })
      })
  }



  navigateBack(): void {
    this.location.back()
  }
}

