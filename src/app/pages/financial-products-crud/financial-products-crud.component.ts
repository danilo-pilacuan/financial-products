import { Component } from '@angular/core';
import { FinancialProductsLayoutComponent } from '../../templates/financial-products-layout/financial-products-layout.component';
import { CrudComponent } from '../../organisms/crud/crud.component';
import { ApiService } from '../../services/api.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'fp-financial-products-crud',
  standalone: true,
  imports: [FinancialProductsLayoutComponent, CrudComponent],
  templateUrl: './financial-products-crud.component.html',
  styleUrl: './financial-products-crud.component.scss',

})
export class FinancialProductsCrudComponent {

}
