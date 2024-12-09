import { TokenKey } from '../pages/const';

export const getToken = (): string => {
  const token = localStorage.getItem(TokenKey);
  return token ?? '';
};

export const saveToken = (token: string): void => {
  localStorage.setItem(TokenKey, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(TokenKey);
};
