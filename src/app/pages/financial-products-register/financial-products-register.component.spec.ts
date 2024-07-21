import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialProductsRegisterComponent } from './financial-products-register.component';

describe('FinancialProductsRegisterComponent', () => {
  let component: FinancialProductsRegisterComponent;
  let fixture: ComponentFixture<FinancialProductsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialProductsRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialProductsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
