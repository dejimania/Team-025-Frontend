import React, { Suspense } from 'react'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes';
import { Spinner } from 'react-bootstrap'
import { Switch } from 'react-router-dom'
import { SignUp } from '../views/signup'
import { Home } from '../views/home'
import { DefaultLayout, AuthLayout } from '../layouts'
import { SignIn } from '../views/signin'
import { ConfirmRegistration } from '../views/confirmregistration'
import { CompleteRegistration } from '../views/completeregistration'
import { Verification } from '../views/verification'
import { Dashboard } from '../views/dashboard'
import UserLayout from '../layouts/UserLayout';
import { LogOut } from '../views/logout';
import { BookAppointment } from '../views/bookappointment';
import { Appointments } from '../views/appointments';

const Routes = () => {
	return (
		<Suspense fallback={Spinner}>
			<Switch>
				<PublicRoutes exact={true} layout={AuthLayout} path="/signup" component={SignUp}/>
				<PublicRoutes exact={true} layout={AuthLayout} path="/signin" component={SignIn}/>
				<PublicRoutes exact={true} layout={AuthLayout} path="/confirmregistration" component={ConfirmRegistration}/>
				<PublicRoutes exact={true} layout={AuthLayout} path="/completeregistration" component={CompleteRegistration}/>
				<PublicRoutes exact={true} layout={AuthLayout} path="/verification/:code" component={Verification}/>
				<PublicRoutes exact={true} layout={DefaultLayout} path="/" component={Home}/>
        <PrivateRoutes exact={true} layout={UserLayout} path="/dashboard" component={Dashboard}/>
        <PrivateRoutes exact={true} layout={UserLayout} path="/appointments/book" component={BookAppointment}/>
        <PrivateRoutes exact={true} layout={UserLayout} path="/appointments" component={Appointments}/>
        <PrivateRoutes exact={true} layout={UserLayout} path="/logout" component={LogOut}/>
			</Switch>
		</Suspense>
	)
}

export default Routes

