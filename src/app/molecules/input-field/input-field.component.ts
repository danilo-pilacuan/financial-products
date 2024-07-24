import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fp-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'number' | 'date' = 'text';
  @Input() validateText: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  value: string = '';

  onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
  }
}
