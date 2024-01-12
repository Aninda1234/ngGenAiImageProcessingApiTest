import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUpscalerComponent } from './image-upscaler.component';

describe('ImageUpscalerComponent', () => {
  let component: ImageUpscalerComponent;
  let fixture: ComponentFixture<ImageUpscalerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUpscalerComponent]
    });
    fixture = TestBed.createComponent(ImageUpscalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
