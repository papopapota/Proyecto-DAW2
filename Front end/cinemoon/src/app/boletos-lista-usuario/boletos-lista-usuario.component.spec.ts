import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosListaUsuarioComponent } from './boletos-lista-usuario.component';

describe('BoletosListaUsuarioComponent', () => {
  let component: BoletosListaUsuarioComponent;
  let fixture: ComponentFixture<BoletosListaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoletosListaUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletosListaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
