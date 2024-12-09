import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../pages/const.js';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

const PrivateRoute = ({ authorizationStatus, children }: PrivateRouteProps) =>
  authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to="/login" />
  );

export default PrivateRoute;
