import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasListarUsuarioComponent } from './peliculas-listar-usuario.component';

describe('PeliculasListarUsuarioComponent', () => {
  let component: PeliculasListarUsuarioComponent;
  let fixture: ComponentFixture<PeliculasListarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculasListarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasListarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
