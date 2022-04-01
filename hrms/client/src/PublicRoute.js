import { Route, Navigate } from 'react-router-dom';

function PublicRoute({ children, user }) {
  return user ? <Navigate to='/home' replace /> : children;
}

export default PublicRoute;
