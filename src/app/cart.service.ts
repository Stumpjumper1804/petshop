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

  decreaseQuantity(pet: IPet) {
    if (pet.quantity > 1) {
      pet.quantity--;
    } else {
      this.cartItems = this.cartItems.filter((cartItem) => pet != cartItem);
      pet.quantity = 1;
    }
  }

  increaseQuantity(pet: IPet) {
    pet.quantity++;
  }

  deletePet(index: number) {
    this.cartItems.splice(index, 1);
  }

  getTotal() {
    let total: number = 0;
    this.cartItems.forEach((pet) => {
      total += pet.price * pet.quantity;
    });
    return total;
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
