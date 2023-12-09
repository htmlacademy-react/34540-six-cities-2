import type {TComments} from '../../types/comment.ts';
import {Review} from '../review/review.tsx';
import {ReviewForm} from '../review-form/review-form.tsx';


type ReviewListProps = {
  reviews: TComments;
}

const ReviewList = ({reviews}: ReviewListProps) => (
  <section className="offer__reviews reviews">
    {reviews.length > 0 && (
      <>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviews.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </ul>
      </>)}
    <ReviewForm/>
  </section>
);

export {ReviewList};
