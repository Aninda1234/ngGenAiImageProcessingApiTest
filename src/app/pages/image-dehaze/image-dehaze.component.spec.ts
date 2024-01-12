import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDehazeComponent } from './image-dehaze.component';

describe('ImageDehazeComponent', () => {
  let component: ImageDehazeComponent;
  let fixture: ComponentFixture<ImageDehazeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDehazeComponent]
    });
    fixture = TestBed.createComponent(ImageDehazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
