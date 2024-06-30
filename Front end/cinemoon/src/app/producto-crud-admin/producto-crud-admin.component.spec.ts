import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCrudAdminComponent } from './producto-crud-admin.component';

describe('ProductoCrudAdminComponent', () => {
  let component: ProductoCrudAdminComponent;
  let fixture: ComponentFixture<ProductoCrudAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoCrudAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCrudAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
