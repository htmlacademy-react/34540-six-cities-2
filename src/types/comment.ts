import type {TUser} from './user.ts';


type TComment = {
  id: string;
  date: string;
  user: Omit<TUser, 'token' | 'email'>;
  comment: string;
  rating: number;
}

type TComments = TComment[];

export type {TComment, TComments};
