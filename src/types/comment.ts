import type {TUser} from './user.ts';
import type {TOffer} from './offer.ts';


type TComment = {
  id: string;
  date: string;
  user: Omit<TUser, 'token' | 'email'>;
  comment: string;
  rating: number;
}

type TComments = TComment[];
type TCommentAuth = Pick<TComment, 'comment' | 'rating'> & Pick<TOffer, 'id'>;


export type {TComment, TComments, TCommentAuth};
