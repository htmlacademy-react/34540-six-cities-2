import type {TComments} from '../../types/comment.ts';
import {Review} from '../review/review.tsx';
import {ReviewForm} from '../review-form/review-form.tsx';


type ReviewListProps = {
  comments: TComments;
}

const ReviewList = ({comments}: ReviewListProps) => (
  <section className="offer__reviews reviews">
    {comments.length > 0 && (
      <>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{comments.length}</span>
        </h2>
        <ul className="reviews__list">
          {comments.map((comment) => (
            <Review key={comment.id} {...comment} />
          ))}
        </ul>
      </>)}
    <ReviewForm/>
  </section>
);

export {ReviewList};
