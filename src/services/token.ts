import type {TToken} from '../types/token.ts';


const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

const getToken = (): TToken => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

const saveToken = (token: TToken): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

export {getToken, saveToken, dropToken};
