import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoToPaintingComponent } from './photo-to-painting.component';

describe('PhotoToPaintingComponent', () => {
  let component: PhotoToPaintingComponent;
  let fixture: ComponentFixture<PhotoToPaintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoToPaintingComponent]
    });
    fixture = TestBed.createComponent(PhotoToPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
