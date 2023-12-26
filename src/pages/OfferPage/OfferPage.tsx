import {Navigate, useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useState} from 'react';
import {Logo} from '../../components/Logo/Logo.tsx';
import {PlaceCard} from '../../components/PlaceCard/PlaceCard.tsx';
import {ReviewList} from '../../components/ReviewList/ReviewList.tsx';
import {Map} from '../../components/Map/Map.tsx';
import {AppRoute, SITE_NAME} from '../../const.ts';
import type {TOffer, TOffers} from '../../types/offer.ts';
import type {TComments} from '../../types/comment.ts';
import {calculateRatingPercentages, capitalizeFirstLetter, getNearbyOffers, getOffersByCity} from '../../utils.ts';
import {useAppSelector} from '../../hooks';
import classNames from 'classnames';


type TOfferPageProps = {
  comments: TComments;
}

const OfferPage = ({comments}: TOfferPageProps) => {
  const offersByCity: TOffers = useAppSelector((state) => getOffersByCity(state));
  const [activeOffer, setActiveOffer] = useState(null);

  const handleCardMouseMove = (offer: TOffer) => {
    setActiveOffer(offer);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const {offerId} = useParams();
  const targetOffer: TOffer | undefined = offersByCity.find((item) => item.id === offerId);
  if (!targetOffer) {
    return <Navigate to={AppRoute.NotFound}/>;
  }

  const {
    title,
    type,
    price: price,
    isFavorite,
    isPremium,
    rating
  } = targetOffer;
  const nearbyOffers = getNearbyOffers(offersByCity, targetOffer);


  return (
    <div className="page">
      <Helmet>
        <title>{SITE_NAME}: {title}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      igor.khripunov@mail.ru
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/room.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button
                  className={classNames('offer__bookmark-button', 'button', {'offer__bookmark-button--active': isFavorite})}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{
                    width: `${calculateRatingPercentages(rating)}%`
                  }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{capitalizeFirstLetter(type)}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">Wi-Fi</li>
                  <li className="offer__inside-item">Washing machine</li>
                  <li className="offer__inside-item">Towels</li>
                  <li className="offer__inside-item">Heating</li>
                  <li className="offer__inside-item">Coffee machine</li>
                  <li className="offer__inside-item">Baby seat</li>
                  <li className="offer__inside-item">Kitchen</li>
                  <li className="offer__inside-item">Dishwasher</li>
                  <li className="offer__inside-item">Cabel TV</li>
                  <li className="offer__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">Angelina</span>
                  <span className="offer__user-status">Pro</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the
                    unique lightness of Amsterdam. The building is green and from
                    18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <ReviewList comments={comments}/>
            </div>
          </div>
          <Map
            targetCity={activeOffer ? activeOffer : targetOffer}
            locations={nearbyOffers}
            place="offer"
          />
        </section>
        {Boolean(nearbyOffers.length) &&
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {nearbyOffers.map((item) => (
                  <PlaceCard
                    key={item.id}
                    offer={item}
                    place="near-places"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  />
                ))}
              </div>
            </section>
          </div>}
      </main>
    </div>
  );
};

export {OfferPage};
