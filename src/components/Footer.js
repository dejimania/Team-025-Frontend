import React from 'react';
import './footer.css';
import logo from '../assets/images/logo1.png'

const Footer = () => {
	return (
		<footer className="footer-area footer--light">
			<div className="footer-big">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-12">
							<div className="footer-widget">
								<div className="widget-about">
									<img src={logo} alt="" className="img-fluid"/>
									<p>Give blood, do something amazing and save lives</p>
									<div>
										<span className="icon-earphones"></span> Call Us:
										<a href="tel:344-755-111">+234 802 283 5496</a><br/>
										<a href="mailto:support@aazztech.com">support@bloodnation.com</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-4">
							<div className="footer-widget">
								<div className="footer-menu footer-menu--1">
									<h4 className="footer-widget-title">Popular Category</h4>
									<ul>
										<li>
											<a href="/">Partners</a>
										</li>
										<li>
											<a href="/">Support</a>
										</li>
										<li>
											<a href="/">Donate</a>
										</li>
										<li>
											<a href="/">Sign in</a>
										</li>
										<li>
											<a href="/">Sign up</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-md-3 col-sm-4">
							<div className="footer-widget">
								<div className="footer-menu">
									<h4 className="footer-widget-title">Our Company</h4>
									<ul>
										<li>
											<a href="/">About Us</a>
										</li>
										<li>
											<a href="/">How It Works</a>
										</li>
										<li>
											<a href="/">Affiliates</a>
										</li>
										<li>
											<a href="/">Testimonials</a>
										</li>
										<li>
											<a href="/">Contact Us</a>
										</li>
										<li>
											<a href="/">Badges</a>
										</li>
										<li>
											<a href="/">Blog</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-md-3 col-sm-4">
							<div className="footer-widget">
								<div className="footer-menu no-padding">
									<h4 className="footer-widget-title">Help Support</h4>
									<ul>
										<li>
											<a href="/">Support Forum</a>
										</li>
										<li>
											<a href="/">Terms &amp; Conditions</a>
										</li>
										<li>
											<a href="/">Support Policy</a>
										</li>
										<li>
											<a href="/">Refund Policy</a>
										</li>
										<li>
											<a href="/">FAQs</a>
										</li>
										<li>
											<a href="/">Buyers Faq</a>
										</li>
										<li>
											<a href="/">Sellers Faq</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

