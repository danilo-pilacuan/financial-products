import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableColumn } from '../../util/types/custom-types';

@Component({
  selector: 'fp-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
}
