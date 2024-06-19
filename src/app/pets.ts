import { IPet } from './pet_definition';

export const petsData: IPet[] = [
  {
    species: 'Elefant',
    age: 12,
    image:
      'https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167_1280.jpg',
    price: 5600,
    feed: 'leaves',
    description: 'This is a big elefant from India.',
    quantity: 1,
  },
  {
    species: 'Puma',
    age: 5,
    image:
      'https://cdn.pixabay.com/photo/2022/01/19/18/03/puma-6950627_640.jpg',
    price: 2300,
    feed: 'meat',
    description: 'This is a ferrocious puma from America.',
    quantity: 1,
  },
  {
    species: 'Horse',
    age: 8,
    image:
      'https://cdn.pixabay.com/photo/2013/10/17/20/59/horse-197199_1280.jpg',
    price: 12000,
    feed: 'hay',
    description: 'This is a horse from Arabia. It is very fast.',
    quantity: 1,
  },
];
