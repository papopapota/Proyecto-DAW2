import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDulceriaCompraComponent } from './detalle-dulceria-compra.component';

describe('DetalleDulceriaCompraComponent', () => {
  let component: DetalleDulceriaCompraComponent;
  let fixture: ComponentFixture<DetalleDulceriaCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleDulceriaCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDulceriaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
