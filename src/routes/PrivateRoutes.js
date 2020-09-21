import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ component: Component, layout:Layout, ...rest }) => {

  const { isAuthenticated, user } = useSelector(state => state.auth);

	const toRender = (props) =>{
    return(
      <>
      {isAuthenticated && user && user.role === 'donor'?(
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
