import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearIconListComponent } from './linear-icon-list.component';

describe('LinearIconListComponent', () => {
  let component: LinearIconListComponent;
  let fixture: ComponentFixture<LinearIconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearIconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
