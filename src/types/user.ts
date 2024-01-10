type TUser = {
  token: string;
  name: string;
  email: string;
  avatarUrl: string;
  isPro: boolean;
}

type TUserAuth = Pick<TUser, 'email'> & { password: string };

export type {TUser, TUserAuth};
