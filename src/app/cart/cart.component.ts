import { Component } from '@angular/core';
import { IPet } from '../pet_definition';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: IPet[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  decreaseQuantity(pet: IPet) {
    this.cartService.decreaseQuantity(pet);
    this.total = this.cartService.getTotal();
    this.cartItems = this.cartService.cartItems;
  }

  increaseQuantity(pet: IPet) {
    this.cartService.increaseQuantity(pet);
    this.total = this.cartService.getTotal();
  }

  getTotal() {
    this.total = this.cartService.getTotal();
  }

  deletePet(index: number) {
    this.cartService.deletePet(index);
    this.total = this.cartService.getTotal();
  }
}
