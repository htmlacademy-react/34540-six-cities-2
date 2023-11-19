const Setting = {
  PlacesCount: 4
} as const;

enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Root = '/'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const SITE_NAME: string = '6 cities';

const STARS_COUNT: number = 5;

export {
  Setting,
  AppRoute,
  AuthorizationStatus,
  SITE_NAME,
  STARS_COUNT
};
