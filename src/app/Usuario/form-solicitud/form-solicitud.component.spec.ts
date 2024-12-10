import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSolicitudComponent } from './form-solicitud.component';

describe('FormSolicitudComponent', () => {
  let component: FormSolicitudComponent;
  let fixture: ComponentFixture<FormSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSolicitudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
