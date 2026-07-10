import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Card } from '../../shared/card/card';
@Component({
  selector: 'app-home',
  imports: [Button, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  onAddToCart(): void {
    console.log('Add to cart clicked');
  }
}
