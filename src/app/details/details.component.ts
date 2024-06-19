import { Component } from '@angular/core';
import { IPet } from '../pet_definition';
import { petsData } from '../pets';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  petsData: IPet[];
  pet: IPet;

  constructor(private route: ActivatedRoute) {
    this.petsData = petsData;
    const id = +this.route.snapshot.params['id'];
    this.pet = petsData[id];
    console.log(this.pet);
  }
}
