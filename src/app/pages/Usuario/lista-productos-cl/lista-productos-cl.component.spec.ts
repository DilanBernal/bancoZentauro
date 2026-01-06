import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosCLComponent } from './lista-productos-cl.component';

describe('ListaProductosCLComponent', () => {
  let component: ListaProductosCLComponent;
  let fixture: ComponentFixture<ListaProductosCLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaProductosCLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProductosCLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
