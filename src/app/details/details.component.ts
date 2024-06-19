import { Component } from '@angular/core';
import { IPet } from '../pet_definition';
import { petsData } from '../pets';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  petsData: IPet[];
  pet: IPet;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.petsData = petsData;
    const id = +this.route.snapshot.params['id'];
    this.pet = petsData[id];
  }

  addToCart() {
    this.cartService.addToCart(this.pet);
  }
}
