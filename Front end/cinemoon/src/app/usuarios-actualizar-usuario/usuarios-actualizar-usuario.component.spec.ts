import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosActualizarUsuarioComponent } from './usuarios-actualizar-usuario.component';

describe('UsuariosActualizarUsuarioComponent', () => {
  let component: UsuariosActualizarUsuarioComponent;
  let fixture: ComponentFixture<UsuariosActualizarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosActualizarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosActualizarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
