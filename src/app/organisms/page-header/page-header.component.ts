import { Component } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'fp-page-header',
  standalone: true,
  imports: [IconComponent, TextComponent],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {}
