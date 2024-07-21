import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'fp-crud',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {}
