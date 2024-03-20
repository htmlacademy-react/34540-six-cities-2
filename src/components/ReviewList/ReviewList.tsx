import type {TComments} from '../../types/comment.ts';
import {Review} from '../Review/Review.tsx';
import {ReviewForm} from '../ReviewForm/ReviewForm.tsx';
import {AuthorizationStatus, SubmitStatus, MAX_COMMENTS} from '../../const.ts';
import type {TCommentAuth} from '../../types/comment.ts';


type ReviewListProps = {
  comments: TComments;
  authorizationStatus: AuthorizationStatus;
  onSubmit: (formData: Omit<TCommentAuth, 'id'>) => void;
  submitStatus: SubmitStatus;
}

const ReviewList = ({comments, authorizationStatus, onSubmit, submitStatus}: ReviewListProps) => (
  <section className="offer__reviews reviews">
    {comments.length > 0 && (
      <>
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{comments.length}</span>
        </h2>
        <ul className="reviews__list">
          {comments.slice(0, MAX_COMMENTS).map((comment) => (
            <Review key={comment.id} {...comment} />
          ))}
        </ul>
      </>)}
    {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm onSubmit={onSubmit} submitStatus={submitStatus}/>}
  </section>
);


export {ReviewList};
