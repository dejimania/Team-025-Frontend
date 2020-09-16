import React, { useEffect } from "react";
import { LandingBenefits, LandingPartners, LandingHero } from '../../components';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

	return (
		<div style={{marginTop: '72px', minHeight: '600px'}}>
      <LandingHero/>
      <LandingPartners/>
      <LandingBenefits/>
		</div>
	)
}

export default Home
