import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoutes = ({ component: Component, layout:Layout, ...rest }) => {
	return (
    <Layout>
      <Route component={Component} {...rest} />
    </Layout>
  )
}

export default PublicRoutes;
