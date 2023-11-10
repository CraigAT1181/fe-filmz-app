export interface FilmCardable {
  id: number;
  title: string;
  img: string | null;
  avgRating: number;
  friendReviews: string[];
}
