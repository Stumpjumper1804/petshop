import { Component } from '@angular/core';
import { IPet } from '../pet_definition';
import { petsData } from '../pets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  petsData: IPet[];

  constructor() {
    this.petsData = petsData;
  }
}
