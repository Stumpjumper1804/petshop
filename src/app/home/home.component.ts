import { Component } from '@angular/core';
import { IPet } from '../pet_definition';
import { petsData } from '../pets';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  petsData: IPet[];

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.petsData = petsData;
  }

  addToCart(pet: IPet) {
    this.cartService.addToCart(pet);
  }
}
