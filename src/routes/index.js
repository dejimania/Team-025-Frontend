import React, { Suspense } from 'react'
import PublicRoutes from './PublicRoutes'
import { Spinner } from 'react-bootstrap'
import { Switch } from 'react-router-dom'
import { SignUp } from '../views/signup'
import { Home } from '../views/home'
import { DefaultLayout, AuthLayout } from '../layouts'
import { SignIn } from '../views/signin'
import { ConfirmRegistration } from '../views/confirmregistration'
import { Verification } from '../views/verification'
import { Dashboard } from '../views/dashboard'

const Routes = () => {
	return (
		<Suspense fallback={Spinner}>
			<Switch>
				<PublicRoutes exact={true} layout={AuthLayout} path="/signup" component={SignUp}/>
				<PublicRoutes exact={true} layout={AuthLayout} path="/signin" component={SignIn}/>
				<PublicRoutes exact={true} layout={AuthLayout} path="/confirmregistration" component={ConfirmRegistration}/>
				<PublicRoutes exact={true} layout={AuthLayout} path="/verification/:code" component={Verification}/>
				<PublicRoutes exact={true} layout={DefaultLayout} path="/" component={Home}/>
				<PublicRoutes exact={true} layout={DefaultLayout} path="/dashboard" component={Dashboard}/>
			</Switch>
		</Suspense>
	)
}

export default Routes

