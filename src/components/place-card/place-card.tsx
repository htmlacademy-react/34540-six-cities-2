import {TOffer} from '../../types/offer.ts';
import {AppRoute, STARS_COUNT} from '../../const.ts';
import {capitalizeFirstLetter} from '../../utils.ts';

type TPlaceCard = {
  offer: TOffer;
  onMouseMove: (id: number) => void;
  onMouseLeave: () => void;
  place?: 'cities' | 'favorites';
}

function PlaceCard({offer, place = 'cities', onMouseMove, onMouseLeave}: TPlaceCard) {
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

  const handleMouseMove = () => {
    onMouseMove(id);
  };

  return (
    <article
      className={`${place}__card place-card`}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <a
          href={previewImage}
          target="_blank"
        >
          <img
            className="place-card__image"
            src={previewImage}
            width={place === 'cities' ? 260 : 150}
            height={place === 'cities' ? 200 : 110}
            alt={title}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${(100 * rating) / STARS_COUNT}%`,
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`${AppRoute.Offer}/${id}`}>
            {title}
          </a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export {PlaceCard};
