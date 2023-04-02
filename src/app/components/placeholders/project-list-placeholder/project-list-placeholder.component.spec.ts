import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListPlaceholderComponent } from './project-list-placeholder.component';

describe('ProjectListPlaceholderComponent', () => {
  let component: ProjectListPlaceholderComponent;
  let fixture: ComponentFixture<ProjectListPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectListPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
