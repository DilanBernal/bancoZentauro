import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarProductosComponent } from './revisar-productos.component';

describe('RevisarProductosComponent', () => {
  let component: RevisarProductosComponent;
  let fixture: ComponentFixture<RevisarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevisarProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
