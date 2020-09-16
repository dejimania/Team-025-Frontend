import React from 'react';
import { NavBar, Footer } from '../components';

const DefaultLayout = ({children}) => {
	return (
		<div>
			<NavBar/>
			<div style={{minHeight: '700px'}}>
        {children}
      </div>
      <Footer/>
		</div>
	)
}

export default DefaultLayout

