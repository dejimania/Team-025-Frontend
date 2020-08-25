import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoutes = ({ component: Component, ...rest }) => {
	
	return <Route component={Component} {...rest} />
}

export default PublicRoutes;
