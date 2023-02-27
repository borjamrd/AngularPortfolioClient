import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search = new FormControl('')
  searchProjects: any = []
  constructor(
    private _searchService: SearchService,
    private _router: Router,
  ) {
  }

  ngOnInit(): void {
  }
  searchInfo() {
    console.log(this.search.value)
    let data = {
      "name": this.search.value?.toLocaleLowerCase()
    }
    if (this.search.value !== '') {
      this._searchService.searchHeader(data).subscribe({
        next: ((resp: any) => {
          console.log(resp)
          this.searchProjects = resp.projects
        }),
        error: ((err: any) => {
          console.error('error in search bar', err)
        })

      })
    } else {
      this.searchProjects = []
    }


  }

  getDetailPage(result: any) {
    console.log(result._id)
    const navigationExtras: NavigationExtras = {
      queryParams: {
        result: JSON.stringify(result)
      }
    }
    this._router.navigate([result._id])
    this.searchProjects = []
  }
}
