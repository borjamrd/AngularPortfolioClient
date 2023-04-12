import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProjectComponent } from './image-project.component';

describe('ImageProjectComponent', () => {
  let component: ImageProjectComponent;
  let fixture: ComponentFixture<ImageProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
