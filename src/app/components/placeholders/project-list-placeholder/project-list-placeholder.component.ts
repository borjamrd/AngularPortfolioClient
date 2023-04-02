import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-list-placeholder',
  templateUrl: './project-list-placeholder.component.html',
  styleUrls: ['./project-list-placeholder.component.scss']
})
export class ProjectListPlaceholderComponent implements OnInit {
  @Input() nProjects: number = 5
  projects = Array(this.nProjects)
  constructor() { }

  ngOnInit(): void {
  }

}
