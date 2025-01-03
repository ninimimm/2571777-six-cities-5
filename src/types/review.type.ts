import { Host } from './host.type';

export type Review = {
  user: Host;
  rating: number;
  comment: string;
  id: string;
  date: string;
};

export type Reviews = Review[];
