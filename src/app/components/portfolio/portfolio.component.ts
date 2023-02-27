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
    urlProject: '',
    tags: [],
    projectImage: '',
    subtitle: '',
    short_description: '',
    full_description: '',
    date: '',
    github: ''
  }
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select all',
    unSelectAllText: 'Unselect all',
    itemsShowLimit: 3,
    searchPlaceholderText: 'Search',
    noDataAvailablePlaceholderText: 'No available tags',
    noFilteredDataAvailablePlaceholderText: 'Tags',
    allowSearchFilter: true
  }
  constructor(
    private _projectsService: ProjectsService
  ) {

    this.getAllProjects()



  }
  getAllProjects() {
    this._projectsService.getAllProjects().subscribe((projects: any) => {
      console.log('Projects', projects)
      this.projects = projects.projects
      this.projects.forEach(project => {
        this.tags.push(...project.tags)
      });
      this.tags = new Set(this.tags)
      let tagForDrwn: { item_id: number; item_text: any; }[] = []
      this.tags.forEach((tag: any) => {
        tagForDrwn.push({
          item_id: tag, item_text: tag
        })
      });
      this.dropdownList = tagForDrwn;

    })
  }

  getProjectByTag(tags: any) {
    this._projectsService.getProjectByTag(tags).subscribe({
      next: ((resp: any) => {
        console.log('Projects by tag', resp)
        this.projects = resp.projects
      }),
      error: ((err: any) => {
        console.log('Error en post tags: ', err)
      })
    })
  }

  seeMoreProjects() {
    this.nProjects += 4
  }


  ngOnInit(): void {

  }
  onItemSelect(item: any) {
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


    if (this.selectedItems.length !== 0) {
      let tags: any = []
      console.log(this.selectedItems)
      this.selectedItems.forEach((item: any) => {
        tags.push(item.item_id)
      })

      let data = {
        tags: tags
      }
      this.getProjectByTag(data)
    } else {
      this.getAllProjects()
    }

  }
  deSelectAll(item: any) {
    // console.log(this.tags)
    let data = {
      tags: []
    }
    this.getAllProjects()
  }
}