import { Route, Navigate } from 'react-router-dom';
import {
  LEAVE_APPROVE,
  LEAVE_VIEW_ALL,
  ROLES_ASSIGN,
} from './constants/permissions';

//https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e
//https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
function PrivateRoute({
  children,
  user,
  requiredPermissions = null,
  matchAllPermissions = false,
}) {
  let hasAccess = true;
  if (requiredPermissions) {
    if (matchAllPermissions) {
      hasAccess = requiredPermissions.every(
        (ai) => [LEAVE_APPROVE, ROLES_ASSIGN, LEAVE_VIEW_ALL].indexOf(ai) !== -1
      );
    } else {
      hasAccess = [LEAVE_APPROVE, ROLES_ASSIGN, LEAVE_VIEW_ALL].some(
        (ai) => requiredPermissions.indexOf(ai) !== -1
      );
    }
  }
  return user && hasAccess ? children : <Navigate to='/auth' replace />;
}

export default PrivateRoute;
