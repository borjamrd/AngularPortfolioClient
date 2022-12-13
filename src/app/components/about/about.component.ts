import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  skills: any = []
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

}
