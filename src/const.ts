enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/404',
  Root = '/'
}

enum ApiRoute {
  Offers = '/offers',
  Login = '/login',
  Comments = '/comments'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum StoreNameSpace {
  City = 'CITY',
  Offers = 'OFFERS',
  Sort = 'SORT',
  User = 'USER',
  Comments = 'COMMENTS'
}

enum StoreNameSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS'
}

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum SortName {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  TopRated = 'Top rated first'
}

const SITE_NAME = '6 cities';

const CityLocations = {
  [CityName.Paris]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  [CityName.Cologne]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  [CityName.Brussels]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  [CityName.Amsterdam]: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  [CityName.Hamburg]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
  [CityName.Dusseldorf]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  },
};

const STARS_COUNT = 5;

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;

export {
  AppRoute,
  ApiRoute,
  AuthorizationStatus,
  StoreNameSpace,
  StoreNameSlice,
  CityName,
  SortName,
  SITE_NAME,
  CityLocations,
  STARS_COUNT,
  MONTHS
};
