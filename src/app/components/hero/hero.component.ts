import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  projects: ProjectModel[] = []

  constructor(
    private _projectsService: ProjectsService
  ) {
    this._projectsService.getAllProjects().subscribe((projects: any) => {
      console.log('Projects', projects)
      this.projects = projects.projects

    })
  }

  ngOnInit(): void {


  }




}
