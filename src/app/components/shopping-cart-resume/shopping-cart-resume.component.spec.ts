import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartResumeComponent } from './shopping-cart-resume.component';

describe('ShoppingCartResumeComponent', () => {
  let component: ShoppingCartResumeComponent;
  let fixture: ComponentFixture<ShoppingCartResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
