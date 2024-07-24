import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fp-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input() text: string = '';
  @Input() size: string = '16px';

  get textStyle() {
    return {
      'font-size': this.size,
    };
  }
}
