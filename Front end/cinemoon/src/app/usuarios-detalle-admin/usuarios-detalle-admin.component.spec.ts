import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetalleAdminComponent } from './usuarios-detalle-admin.component';

describe('UsuariosDetalleAdminComponent', () => {
  let component: UsuariosDetalleAdminComponent;
  let fixture: ComponentFixture<UsuariosDetalleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosDetalleAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosDetalleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
