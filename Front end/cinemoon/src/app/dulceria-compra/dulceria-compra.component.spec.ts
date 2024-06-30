import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceriaCompraComponent } from './dulceria-compra.component';

describe('DulceriaCompraComponent', () => {
  let component: DulceriaCompraComponent;
  let fixture: ComponentFixture<DulceriaCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DulceriaCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DulceriaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
