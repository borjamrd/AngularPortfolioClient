import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-down',
  templateUrl: './button-down.component.html',
  styleUrls: ['./button-down.component.scss']
})
export class ButtonDownComponent implements OnInit {

  @Input('section') section = '' 
  constructor() { }

  ngOnInit(): void {
  }

}
