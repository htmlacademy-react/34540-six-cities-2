const Setting = {
  PlacesCount: 5
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

export {
  Setting,
  AppRoute,
  AuthorizationStatus,
  SITE_NAME
};
