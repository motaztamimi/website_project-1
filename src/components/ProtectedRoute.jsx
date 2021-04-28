import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../config/firebase';
const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (auth.currentUser) {
          return <RouteComponent {...routeProps} />;
        } else {
          return <Redirect to={'/Admin'} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
