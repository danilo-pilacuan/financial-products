import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputFieldComponent } from '../../molecules/input-field/input-field.component';
import { TableComponent } from '../../molecules/table/table.component';
import { TableColumn } from '../../util/types/custom-types';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../atoms/text/text.component';

interface user{
  name: string;
  age: number;
  address: string;

}

interface products {
  id:string,
  name:string,
  description:string,
  logo:string,
  date_release:string,
  date_revision:string
}

@Component({
  selector: 'fp-crud',
  standalone: true,
  imports: [
    ButtonComponent,
    InputFieldComponent,
    TableComponent,
    FormsModule,
    TextComponent,
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
  providers: [ApiService],
})
export class CrudComponent {
  // @Input() tableDataInput: user[] = [
  //   { name: 'John', age: 20, address: '123 Main St' },
  //   { name: 'Jane', age: 21, address: '456 Elm St' },
  //   { name: 'Joe', age: 22, address: '789 Maple St' },
  // ];
  @Input() tableColumnsInput: TableColumn[] = [
    { field: 'logo', label: 'Logo' },
    { field: 'name', label: 'Nombre del producto' },
    { field: 'description', label: 'Descripción' },
    { field: 'date_release', label: 'Fecha de liberación' },
    { field: 'date_revision', label: 'Fecha de reestructuración' },
  ];

  dataProducts: Array<products> = [];
  allDataProducts: Array<products> = [];
  selectedOption: string = '5';

  constructor(private apiService: ApiService) {}

  // ngOnInit() {
  //   this.apiService.getData('endpoint').subscribe(
  //     (response) => {
  //       this.data = response;
  //     },
  //     (error) => {
  //       console.error('There was an error!', error);
  //     }
  //   );
  // }

  onSelectChange() {
    this.updateVisibleProducts();
  }

  updateVisibleProducts() {
    const count = parseInt(this.selectedOption);
    this.dataProducts = this.allDataProducts.slice(0, count);
  }

  ngOnInit() {
    this.apiService.getData('bp/products').subscribe(
      (response: any) => {
        this.allDataProducts = response.data;
        this.updateVisibleProducts();
      },
      (error: any) => {
        console.error('There was an error!', error);
      }
    );
  }
}
