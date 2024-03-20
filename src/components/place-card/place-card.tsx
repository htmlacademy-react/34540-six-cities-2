import {memo} from 'react';
import {Link} from 'react-router-dom';
import {Bookmark} from '../bookmark/bookmark.tsx';
import {AppRoute} from '../../const.ts';
import {capitalizeFirstLetter, calculateRatingPercentages} from '../../utils.ts';
import type {TOffer} from '../../types/offer.ts';

type TPlaceCardProps = {
  offer: TOffer;
  onMouseOver: (offer: TOffer) => void;
  onMouseLeave: () => void;
  place?: 'cities' | 'favorites' | 'near-places';
}

const PlaceCard = memo(({offer, place = 'cities', onMouseOver, onMouseLeave}: TPlaceCardProps) => {
  const {
    id,
    title,
    type,
    price: price,
    previewImage,
    isFavorite,
    isPremium,
    rating
  } = offer;

  const handleMouseOver = () => {
    onMouseOver(offer);
  };

  return (
    <article
      className={`${place}__card place-card`}
      onMouseOver={handleMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <Link
          to={previewImage}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="place-card__image"
            src={previewImage}
            width={place !== 'favorites' ? 260 : 150}
            height={place !== 'favorites' ? 200 : 110}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <Bookmark id={id} isActive={isFavorite} place={'place-card'}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${calculateRatingPercentages(rating)}%`
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
});

PlaceCard.displayName = 'PlaceCard';


export {PlaceCard};
