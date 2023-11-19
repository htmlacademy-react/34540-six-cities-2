enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/404',
  Root = '/'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const SITE_NAME = '6 cities';

const STARS_COUNT = 5;

export {
  AppRoute,
  AuthorizationStatus,
  SITE_NAME,
  STARS_COUNT
};
