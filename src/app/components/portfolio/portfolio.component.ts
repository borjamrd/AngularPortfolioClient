import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  data: any;
  tags: any = []
  nProjects = 4;
  projects: ProjectModel[] = []
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
  dropdownList: any = [];
  selectedItems: any = [{
    item_id: 0, item_text: ''
  }];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  }
  constructor(
    private _projectsService: ProjectsService
  ) {
    this._projectsService.getAllProjects().subscribe((projects: any) => {
      console.log('Projects', projects)
      this.projects = projects.projects
      this.projects.forEach(project => {
        // console.log(project.tags)
        this.tags.push(...project.tags)
      });
      this.tags = new Set(this.tags)
      let tagForDrwn: { item_id: number; item_text: any; }[] = []
      this.tags.forEach((tag: any) => {
        tagForDrwn.push({
          item_id: tag, item_text: tag
        })
      });
      this.dropdownList = tagForDrwn
      this.selectedItems = tagForDrwn

    })


  }

  getProjectByTag(tags: any) {
    this._projectsService.getProjectByTag(tags).subscribe({
      next: ((resp: any) => {
        console.log('Projects by tag', resp)
        this.projects = resp.projects
        // this.tags = resp.tags
      }),
      error: ((err: any) => {
        console.log('Error en post tags: ', err)
      })
    })
  }

 
  ngOnInit(): void {

  }
  onItemSelect(item: any) {
    console.log(this.selectedItems)
    let tags: any = []
    this.selectedItems.forEach((item: any) => {
      tags.push(item.item_id)
    })

    let data = {
      tags: tags
    }
    this.getProjectByTag(data)
  }
  onSelectAll(items: any) {
    console.log(items);
    let tags: any = []
    items.forEach((item: any) => {
      tags.push(item.item_id)
    })
    let data = {
      tags: tags,
    }
    this.getProjectByTag(data)
  }
  deSelect(item: any) {
    let tags: any = []
    console.log(this.selectedItems)
    this.selectedItems.forEach((item: any) => {
      tags.push(item.item_id)
    })

    let data = {
      tags: tags
    }
    this.getProjectByTag(data)
  }
  deSelectAll(item: any) {
    // console.log(this.tags)
    let data = {
      tags: []
    }
    this.getProjectByTag(data)
  }
}