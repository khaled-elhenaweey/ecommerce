import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Output() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
