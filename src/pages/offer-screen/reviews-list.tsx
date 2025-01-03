import { Reviews } from '../../types/review.type';
import { MemoizedReviewInfo } from './review-info';

type ReviewsListProps = {
  reviews: Reviews;
};

export function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => {
        const keyValue = `review-${index}`;
        return <MemoizedReviewInfo review={review} key={keyValue} />;
      })}
    </ul>
  );
}
