import { Host } from './host';

export type Review = {
  user: Host;
  rating: number;
  comment: string;
  id: string;
  date: string;
}

export type Reviews = Review[];
