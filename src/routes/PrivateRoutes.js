import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CheckRegistration, CheckVerification } from '../services';

const PrivateRoutes = ({ component: Component, layout:Layout, ...rest }) => {

  const { isAuthenticated, user, role } = useSelector(state => state.auth);

  CheckVerification();
  CheckRegistration();

	const toRender = (props) =>{
    return(
      <>
      {isAuthenticated && user && role === 'user'?(
        <Layout>
          <Component {...props}/>
        </Layout>
      ):(
        <Redirect to="/signin"/>
      )}
      </>
    )
  }

	return (
		<Route
			{...rest}
			render={toRender}
		/>
	)
}

export default PrivateRoutes
