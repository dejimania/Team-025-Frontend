import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import illustration from '../../assets/images/undraw_team_work_k80m.svg';
import './signup.css';

const SignUp = () => {
	return (
		<Container fluid className="h-100 signup-container">
			<Row className="h-100">
				<Col md="6" className="pt-5">
					<div className="signup-box mx-auto">
						<h5 className="mb-4 text-danger">BLOODNATION</h5>
						<h2 className="display-4">Sign up to <br/>BloodNation</h2>
						<p>Follow the easy step to get started with bloodnation</p>
						<Button  variant="outline-danger" className="mt-5 mb-5 pt-2 pb-2" block>Sign up with Google</Button>
						<p>Or Sign up with an email</p>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Control type="email" placeholder="Enter email" className="pt-4 pb-4" />
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Control type="password" placeholder="Password"  className="pt-4 pb-4"/>
							</Form.Group>

							<Form.Group controlId="formBasicComfirmPassword">
								<Form.Control type="password" placeholder="Confirm Password"  className="pt-4 pb-4"/>
							</Form.Group>

							<Button variant="danger" type="submit" className="mb-3 pt-2 pb-2" block>
								Create Account
							</Button>
							<p>By signing up, i agree to the BloodNation Privacy Policy<br/> and Terms of Servcie</p>
						</Form>
						<h5>Have an account? Sign in</h5>
					</div>
				</Col>
				<Col md="6" className="text-white d-flex signup-red-box">
					<div className="signup-illustration-box my-auto mx-auto pt-3 pb-5">
						<h1 className="display-4 mt-4 mb-3">Register to be a<br/> blood donor</h1>
						<img src={illustration} className="img-fluid illustration mb-3" alt="sign up"/>
						<p className="mb-4 text-white">Give blood, do something amazing and save lives</p>
						<hr className="border"/>
						<h5 className="mt-4">Have an account?</h5>
						<Button variant="light" className="mb-3 pt-2 pb-2" block>
								Sign In
							</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default SignUp