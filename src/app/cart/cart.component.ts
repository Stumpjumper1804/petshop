import { Component } from '@angular/core';
import { IPet } from '../pet_definition';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems!: IPet[];
}
