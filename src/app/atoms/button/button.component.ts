import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common"

@Component({
  selector: 'fp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: 'primary' | 'secondary' | 'reset' = 'primary';
}
