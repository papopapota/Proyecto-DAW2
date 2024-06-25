import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListaAdminComponent } from './usuarios-lista-admin.component';

describe('UsuariosListaAdminComponent', () => {
  let component: UsuariosListaAdminComponent;
  let fixture: ComponentFixture<UsuariosListaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosListaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosListaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
