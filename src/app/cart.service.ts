import { Injectable } from '@angular/core';
import { IPet } from './pet_definition';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: IPet[] = [];
  constructor() {}

  addToCart(pet: IPet) {
    this.cartItems.push(pet);
    console.log(this.cartItems);
  }
}
