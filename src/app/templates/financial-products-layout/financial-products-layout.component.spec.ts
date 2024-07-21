import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialProductsLayoutComponent } from './financial-products-layout.component';

describe('FinancialProductsLayoutComponent', () => {
  let component: FinancialProductsLayoutComponent;
  let fixture: ComponentFixture<FinancialProductsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialProductsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialProductsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
