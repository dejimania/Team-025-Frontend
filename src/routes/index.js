import React, { Suspense } from 'react'
import PublicRoutes from './PublicRoutes'
import { Spinner } from 'react-bootstrap'
import { Switch } from 'react-router-dom'
import { SignUp } from '../views/signup'
import { Home } from '../views/home'

const Routes = () => {
	return (
		<Suspense fallback={Spinner}>
			<Switch>
				<PublicRoutes exact={true} path="/signup" component={SignUp}/>
				<PublicRoutes exact={true} path="/" component={Home}/>
			</Switch>
		</Suspense>
	)
}

export default Routes

