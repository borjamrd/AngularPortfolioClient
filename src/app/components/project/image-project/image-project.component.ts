import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project';

@Component({
  selector: 'image-project',
  templateUrl: './image-project.component.html',
  styleUrls: ['./image-project.component.scss']
})
export class ImageProjectComponent implements OnInit {
  @Input() project: ProjectModel = {
    _id: '',
    name: '',
    urlProject: '',
    tags: [],
    projectImage: undefined,
    subtitle: '',
    short_description: '',
    full_description: '',
    date: '',
    github: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
