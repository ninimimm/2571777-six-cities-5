import { Review } from '../../../models/review';
import { CommentSendingForm } from '../../../pages/offer-screen/comment-sending-form';
import { ReviewComponent } from './review';

export type ReviewListProps = {
  reviewList: Review[];
};

export function ReviewList({ reviewList }: ReviewListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewList.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewList.map((review) => (
          <ReviewComponent key={review.id} review={review} />
        ))}
      </ul>
      <CommentSendingForm />
    </section>
  );
}
