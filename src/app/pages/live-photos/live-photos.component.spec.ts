import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePhotosComponent } from './live-photos.component';

describe('LivePhotosComponent', () => {
  let component: LivePhotosComponent;
  let fixture: ComponentFixture<LivePhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivePhotosComponent]
    });
    fixture = TestBed.createComponent(LivePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
