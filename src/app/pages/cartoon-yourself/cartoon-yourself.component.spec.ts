import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonYourselfComponent } from './cartoon-yourself.component';

describe('CartoonYourselfComponent', () => {
  let component: CartoonYourselfComponent;
  let fixture: ComponentFixture<CartoonYourselfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartoonYourselfComponent]
    });
    fixture = TestBed.createComponent(CartoonYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
