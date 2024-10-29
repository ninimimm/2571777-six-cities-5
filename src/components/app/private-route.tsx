import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

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
