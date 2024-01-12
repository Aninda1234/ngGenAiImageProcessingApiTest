import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonGeneratorComponent } from './cartoon-generator.component';

describe('CartoonGeneratorComponent', () => {
  let component: CartoonGeneratorComponent;
  let fixture: ComponentFixture<CartoonGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartoonGeneratorComponent]
    });
    fixture = TestBed.createComponent(CartoonGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
