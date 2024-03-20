import {useAppDispatch, useAppSelector} from '../../hooks';
import {browserHistory} from '../../browser-history.ts';
import {postFavorite} from '../../store/actions.ts';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import type {TOffer} from '../../types/offer.ts';


type TBookmarkProps = {
  id: TOffer['id'];
  isActive: boolean;
  place?: 'place-card' | 'offer';
}

const Bookmark = ({id, isActive, place = 'place-card'}: TBookmarkProps) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      browserHistory.push(AppRoute.Login);
    }

    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(postFavorite({
        id,
        status: isActive ? 0 : 1
      }));
    }
  };

  return (
    <button
      className={`${place}__bookmark-button button${isActive ? ` ${place}__bookmark-button--active` : ''}`}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${place}__bookmark-icon`}
        width={place === 'offer' ? 31 : 18}
        height={place === 'offer' ? 33 : 19}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'From' : 'To'} bookmarks</span>
    </button>
  );
};


export {Bookmark};
