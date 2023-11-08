import { FilmCardable } from './interfaces/filmCard';

export const exampleFilms: FilmCardable[] = [
  {
    id: 1,
    title: 'Shrek',
    img: 'https://i.insider.com/60817ec5354dde0018c06960?width=1000&format=jpeg&auto=webp',
    avgRating: 3,
    friendReviews: ['Craig', 'Luke'],
  },

  {
    id: 2,
    title: 'Shrek 2',
    img: 'https://i.insider.com/60817ec5354dde0018c06960?width=1000&format=jpeg&auto=webp',
    avgRating: 4,
    friendReviews: ['Harry', 'Barbara'],
  },
];
