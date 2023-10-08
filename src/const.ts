const Setting = {
  PlacesCount: 5
} as const;

enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Root = '/'
}

export {
  Setting,
  AppRoute
};
