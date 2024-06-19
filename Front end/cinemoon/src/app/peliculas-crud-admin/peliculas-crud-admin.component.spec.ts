import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasCrudAdminComponent } from './peliculas-crud-admin.component';

describe('PeliculasCrudAdminComponent', () => {
  let component: PeliculasCrudAdminComponent;
  let fixture: ComponentFixture<PeliculasCrudAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculasCrudAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasCrudAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
