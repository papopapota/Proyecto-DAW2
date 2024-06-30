import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesCrudAdminComponent } from './funciones-crud-admin.component';

describe('FuncionesCrudAdminComponent', () => {
  let component: FuncionesCrudAdminComponent;
  let fixture: ComponentFixture<FuncionesCrudAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncionesCrudAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionesCrudAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
