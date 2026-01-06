import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDeEntregaComponent } from './solicitud-de-entrega.component';

describe('SolicitudDeEntregaComponent', () => {
  let component: SolicitudDeEntregaComponent;
  let fixture: ComponentFixture<SolicitudDeEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudDeEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudDeEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
