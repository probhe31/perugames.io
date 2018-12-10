import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCategoryListComponent } from './header-category-list.component';

describe('HeaderCategoryListComponent', () => {
  let component: HeaderCategoryListComponent;
  let fixture: ComponentFixture<HeaderCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
