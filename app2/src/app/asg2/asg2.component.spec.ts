import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asg2Component } from './asg2.component';

describe('Asg2Component', () => {
  let component: Asg2Component;
  let fixture: ComponentFixture<Asg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
