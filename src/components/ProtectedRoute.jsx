/** @format */

import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../config/firebase';
const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const [Render, setRender] = useState(false);
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        setTimeout(() => {
          setRender(true);
        }, 500);
        if (Render && auth.currentUser) {
          return <RouteComponent {...routeProps} />;
        } else if (Render && !auth.currentUser) {
          return <Redirect to={'/Admin'} />;
        } else {
        }
      }}
    />
  );
};

export default ProtectedRoute;
