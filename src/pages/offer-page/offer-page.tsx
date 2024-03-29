import {Navigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {Spinner} from '../../components/spinner/spinner.tsx';
import {Header} from '../../components/header/header.tsx';
import {PlaceCard} from '../../components/place-card/place-card.tsx';
import {ReviewList} from '../../components/review-list/review-list.tsx';
import {Map} from '../../components/map/map.tsx';
import {Bookmark} from '../../components/bookmark/bookmark.tsx';
import {AppRoute, SITE_NAME, MAX_PHOTOS_COUNT} from '../../const.ts';
import {
  calculateRatingPercentages,
  capitalizeFirstLetter,
  getNearbyOffersbyActiveOffer
} from '../../utils.ts';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {fetchOffer, fetchNearbyOffers, fetchComments, postComment} from '../../store/actions.ts';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {
  getIsOfferLoading,
  getOffer,
  getOffersByCity,
  selectComments,
  getNearbyOffers,
  getCommentStatus
} from '../../store/site-data/selectors.ts';
import classNames from 'classnames';
import type {TOffer, TOffers} from '../../types/offer.ts';
import type {TCommentAuth} from '../../types/comment.ts';


const OfferPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const targetOffer = useAppSelector(getOffer);
  const commentStatus = useAppSelector(getCommentStatus);
  const comments = useAppSelector(selectComments);
  let nearbyOffers = useAppSelector(getNearbyOffers);

  const [, setActiveOffer] = useState<TOffer | null>(null);
  const offersByCity: TOffers = useAppSelector((state) => getOffersByCity(state));

  useEffect(() => {
    const {offerId} = params;

    if (offerId) {
      dispatch(fetchOffer(offerId));
      dispatch(fetchNearbyOffers(offerId));
      dispatch(fetchComments(offerId));
    }
  }, [params, dispatch]);

  if (isOfferLoading) {
    return <Spinner/>;
  }

  if (!targetOffer) {
    return <Navigate to={AppRoute.NotFound}/>;
  }

  const {
    id,
    title,
    type,
    price: price,
    isFavorite,
    isPremium,
    rating,
    images,
    bedrooms,
    maxAdults,
    goods,
    host,
    description
  } = targetOffer;

  nearbyOffers = getNearbyOffersbyActiveOffer(offersByCity, targetOffer);

  const sliceImages = (imagesList: string[] | undefined) => {
    if (imagesList) {
      return imagesList.filter((_, index) => index < MAX_PHOTOS_COUNT);
    }
    return [];
  };

  const handleCardMouseOver = (offer: TOffer) => {
    setActiveOffer(offer);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const handleFormSubmit = (formData: Omit<TCommentAuth, 'id'>) => {
    dispatch(postComment({id, ...formData}));
  };

  return (
    <div className="page">
      <Helmet>
        <title>{SITE_NAME}: {title}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {(sliceImages(images) ?? []).map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt={title}/>
                </div>
              ))}
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
                <Bookmark id={id} isActive={isFavorite} place={'offer'}/>
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
                  {typeof bedrooms === 'number' && (
                    <>
                      {bedrooms}{bedrooms > 1 ? ' Bedrooms' : ' Bedroom'}
                    </>
                  )}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {maxAdults && (
                    <>
                      Max {maxAdults} {maxAdults > 1 ? ' adults' : ' adult'}
                    </>
                  )}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {goods?.length && (
                  <ul className="offer__inside-list">
                    {goods.map((good) => (
                      <li key={good} className="offer__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>

                <div className="offer__host-user user">
                  <div
                    className={classNames('offer__avatar', 'user__avatar-wrapper', {'property__avatar-wrapper--pro': host?.isPro})}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={host?.avatarUrl}
                      width={74}
                      height={74}
                      alt={host?.name}
                    />
                  </div>
                  <span className="offer__user-name">{host?.name}</span>
                  {host?.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewList
                comments={comments}
                authorizationStatus={authorizationStatus}
                onSubmit={handleFormSubmit}
                submitStatus={commentStatus}
              />
            </div>
          </div>
          <Map
            targetCity={targetOffer}
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
                    onMouseOver={handleCardMouseOver}
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
