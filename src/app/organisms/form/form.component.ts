import { Component } from '@angular/core';
import { InputFieldComponent } from '../../molecules/input-field/input-field.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'fp-form',
  standalone: true,
  imports: [InputFieldComponent, ButtonComponent, TextComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {}
