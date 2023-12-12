import type {TComment} from '../../types/comment.ts';
import {STARS_COUNT} from '../../const.ts';
import {formatDate} from '../../utils';


const Review = ({comment, date, rating, user}: TComment) => {
  const {name, avatarUrl} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt={`Reviews avatar - ${name}`}
          />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{
                width: `${(100 * rating) / STARS_COUNT}%`
              }}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time
          className="reviews__time"
          dateTime={date}
        >
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
};

export {Review};
