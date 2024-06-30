import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasCrudAdminComponent } from './salas-crud-admin.component';

describe('SalasCrudAdminComponent', () => {
  let component: SalasCrudAdminComponent;
  let fixture: ComponentFixture<SalasCrudAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalasCrudAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasCrudAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
