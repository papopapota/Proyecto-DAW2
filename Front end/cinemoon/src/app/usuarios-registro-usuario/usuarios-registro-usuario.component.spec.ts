import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosRegistroUsuarioComponent } from './usuarios-registro-usuario.component';

describe('UsuariosRegistroUsuarioComponent', () => {
  let component: UsuariosRegistroUsuarioComponent;
  let fixture: ComponentFixture<UsuariosRegistroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosRegistroUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosRegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
