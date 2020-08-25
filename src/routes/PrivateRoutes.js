import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ component: Compoent, ...rest }) => {

	const { isAuthenticated, user } = useSelector(state => state.auth);

	const toRender = (props) => 
		isAuthenticated && user && user.role === 'user'?(
			<Component {...props}/>
		):(
			<Redirect to="/signin"/>
		)

	return (
		<Route 
			{...rest}
			render={toRender}
		/>
	)
}

export default PrivateRoutes
