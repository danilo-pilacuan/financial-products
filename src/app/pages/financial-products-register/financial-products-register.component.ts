import { Component } from '@angular/core';
import { FinancialProductsLayoutComponent } from '../../templates/financial-products-layout/financial-products-layout.component';
import { FormComponent } from '../../organisms/form/form.component';

@Component({
  selector: 'fp-financial-products-register',
  standalone: true,
  imports: [FormComponent, FinancialProductsLayoutComponent],
  templateUrl: './financial-products-register.component.html',
  styleUrl: './financial-products-register.component.scss',
})
export class FinancialProductsRegisterComponent {}
