import {TOffer} from '../../types/offer.ts';
import {STARS_COUNT} from '../../const.ts';
import {AppRoute} from '../../const.ts';

type TPlaceCard = {
  offer: TOffer;
}

function PlaceCard({offer}: TPlaceCard) {
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

  const capitalizeTypeName = (typeName: string) => typeName.charAt(0).toUpperCase()
    + typeName.slice(1);

  return (
    <article className="cities__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a
          href={previewImage}
          target="_blank"
        >
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
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
        <p className="place-card__type">{capitalizeTypeName(type)}</p>
      </div>
    </article>
  );
}

export {PlaceCard};
