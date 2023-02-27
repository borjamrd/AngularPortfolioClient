import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  skills: any[] = []
  totalPro: number = 0
  total: number = 0
  constructor() { }

  ngOnInit(): void {
    this.skills = [
      { name: 'Angular', img: 'angular' },
      { name: 'React', img: 'react' },
      { name: 'Typescript', img: 'typescript' },
      { name: 'Javascript', img: 'javascript' },
      { name: 'AmazonS3 ', img: 'amazons3' },
      { name: 'NodeJS', img: 'node' },
      { name: 'MongoDB', img: 'mongodb' },
      { name: 'SASS', img: 'sass' },
      { name: 'Miro', img: 'miro' },
      { name: 'Bootstrap', img: 'bootstrap' },
      { name: 'Figma', img: 'figma' },
      { name: 'Notion', img: 'notion' },

    ]
  }

  changeTotalPro(event: any) {
    this.totalPro = event
  }
  changeTotal(event: any) {
    this.total = event
  }
}

