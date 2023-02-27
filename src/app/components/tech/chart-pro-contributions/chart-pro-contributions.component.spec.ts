import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProContributionsComponent } from './chart-pro-contributions.component';

describe('ChartProContributionsComponent', () => {
  let component: ChartProContributionsComponent;
  let fixture: ComponentFixture<ChartProContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartProContributionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartProContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
