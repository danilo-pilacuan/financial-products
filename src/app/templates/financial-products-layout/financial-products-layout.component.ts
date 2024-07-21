import { Component } from '@angular/core';
import { HeaderComponent } from '../../organisms/header/header.component';


@Component({
  selector: 'fp-financial-products-layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './financial-products-layout.component.html',
  styleUrl: './financial-products-layout.component.scss',
})
export class FinancialProductsLayoutComponent {}
