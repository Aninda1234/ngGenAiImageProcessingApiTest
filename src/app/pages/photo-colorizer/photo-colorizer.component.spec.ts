import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoColorizerComponent } from './photo-colorizer.component';

describe('PhotoColorizerComponent', () => {
  let component: PhotoColorizerComponent;
  let fixture: ComponentFixture<PhotoColorizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoColorizerComponent]
    });
    fixture = TestBed.createComponent(PhotoColorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
