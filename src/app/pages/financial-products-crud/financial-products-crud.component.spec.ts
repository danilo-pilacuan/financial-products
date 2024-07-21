import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialProductsCrudComponent } from './financial-products-crud.component';

describe('FinancialProductsCrudComponent', () => {
  let component: FinancialProductsCrudComponent;
  let fixture: ComponentFixture<FinancialProductsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialProductsCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialProductsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
