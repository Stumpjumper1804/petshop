import { Injectable } from '@angular/core';
import { IPet } from './pet_definition';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: IPet[] = [];
  constructor() {}

  addToCart(pet: IPet) {
    if (this.cartItems.includes(pet)) {
      pet.quantity++;
    } else {
      this.cartItems.push(pet);
    }
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
