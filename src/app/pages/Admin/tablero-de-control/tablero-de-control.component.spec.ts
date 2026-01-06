import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroDeControlComponent } from './tablero-de-control.component';

describe('TableroDeControlComponent', () => {
  let component: TableroDeControlComponent;
  let fixture: ComponentFixture<TableroDeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableroDeControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroDeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
