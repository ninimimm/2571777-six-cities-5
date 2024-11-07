import { Rating } from './rating.enum';
import { User } from './user';

export type Review = {
  id: string;
  user: User;
  rating: Rating;
  reviewText:string;
  time: Date;
}
