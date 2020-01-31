import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionOCComponent } from './aprobacion-oc.component';

describe('AprobacionOCComponent', () => {
  let component: AprobacionOCComponent;
  let fixture: ComponentFixture<AprobacionOCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobacionOCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
