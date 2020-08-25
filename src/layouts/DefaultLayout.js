import React from 'react';
import { NavBar, Footer } from '../components';

const DefaultLayout = ({children}) => {
	return (
		<div>
			<NavBar/>
			{children}
			<Footer/>
		</div>
	)
}

export default DefaultLayout

