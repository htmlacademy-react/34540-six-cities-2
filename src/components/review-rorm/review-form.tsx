import {FormEvent, Fragment, useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {STARS_COUNT, RatingTitle, SubmitStatus, ValidationLengthLimits} from '../../const.ts';
import type {ChangeEvent} from 'react';
import type {TCommentAuth} from '../../types/comment.ts';


type TReviewFormProps = {
  onSubmit: (formData: Omit<TCommentAuth, 'id'>) => void;
  submitStatus: SubmitStatus;
}

const UNSUCCESSFUL_COMMENT_POST_MESSAGE = 'An error occurred while posting a comment. Please try again later.';

const ReviewForm = ({onSubmit, submitStatus}: TReviewFormProps) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const isSubmitting = submitStatus === SubmitStatus.Pending;
  const isValid =
    comment.length >= ValidationLengthLimits.MIN &&
    comment.length <= ValidationLengthLimits.MAX &&
    rating !== '';

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      comment: comment,
      rating: +rating
    });
  };

  useEffect(() => {
    switch (submitStatus) {
      case SubmitStatus.Fulfilled:
        setComment('');
        setRating('');
        break;
      case SubmitStatus.Rejected:
        toast.warn(UNSUCCESSFUL_COMMENT_POST_MESSAGE);
        break;
    }
  }, [submitStatus]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Array.from({length: STARS_COUNT}, (_, i: number) => (
          <Fragment key={`Star ${STARS_COUNT - i}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${STARS_COUNT - i}-stars`}
              type="radio"
              checked={STARS_COUNT - i === +rating}
              value={STARS_COUNT - i}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
            <label
              htmlFor={`${STARS_COUNT - i}-stars`}
              className="reviews__rating-label form__rating-label"
              title={RatingTitle[STARS_COUNT - 1 - i]}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        maxLength={ValidationLengthLimits.MAX}
        onChange={handleTextareaChange}
        disabled={isSubmitting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{ValidationLengthLimits.MIN} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};


export {ReviewForm};
