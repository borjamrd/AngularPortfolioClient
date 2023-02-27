import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  projects: ProjectModel[] = []
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe({
      next: ((resp: any) => {
        console.log(resp)
        this.projects = resp.projects
      })
    })

  }

}
