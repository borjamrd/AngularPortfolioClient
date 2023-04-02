import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModel } from 'src/app/models/project';

@Component({
  selector: 'related-projects',
  templateUrl: './related-projects.component.html',
  styleUrls: ['./related-projects.component.scss']
})
export class RelatedProjectsComponent implements OnInit, OnChanges {
  @Input() relatedProjects: ProjectModel[] = []
  @Input() isDataLoading: boolean = true
  constructor(
    private _router: Router,
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isDataLoading']?.['currentValue']) { this.isDataLoading = changes['isDataLoading']['currentValue'] }
    if (changes['relatedProjects']?.['currentValue']) { this.relatedProjects = changes['relatedProjects']['currentValue'] }
  }

  ngOnInit(): void {
  }
  goToProject(projectId: any) {
    this._router.navigate([`/projects/${projectId}`],);
  }
}
