import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../organisms/page-header/page-header.component';


@Component({
  selector: 'fp-financial-products-layout',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './financial-products-layout.component.html',
  styleUrl: './financial-products-layout.component.scss',
})
export class FinancialProductsLayoutComponent {}
