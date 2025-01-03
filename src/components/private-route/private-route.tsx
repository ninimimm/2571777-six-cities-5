import { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../pages/const';

type PrivateProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return authStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}
