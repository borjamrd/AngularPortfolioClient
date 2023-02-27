import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartContributionsComponent } from './chart-contributions.component';

describe('ChartContributionsComponent', () => {
  let component: ChartContributionsComponent;
  let fixture: ComponentFixture<ChartContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartContributionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
