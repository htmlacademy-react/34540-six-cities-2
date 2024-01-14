import type {TComments} from '../../types/comment.ts';
import {Review} from '../Review/Review.tsx';
import {ReviewForm} from '../ReviewForm/ReviewForm.tsx';
import {AuthorizationStatus} from '../../const.ts';


type ReviewListProps = {
  comments: TComments;
  authorizationStatus: AuthorizationStatus;
}

const ReviewList = ({comments, authorizationStatus}: ReviewListProps) => (
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
    {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm/>}
  </section>
);

export {ReviewList};
