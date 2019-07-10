import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitedComponent } from './submited.component';

describe('SubmitedComponent', () => {
  let component: SubmitedComponent;
  let fixture: ComponentFixture<SubmitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
