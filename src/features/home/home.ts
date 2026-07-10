import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  onAddToCart(): void {
    console.log('Add to cart clicked');
  }
}
