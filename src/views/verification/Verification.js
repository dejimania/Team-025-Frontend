import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import illustration from "../../assets/images/undraw_team_work_k80m.svg";
import logo from '../../assets/images/logo_2.png'
import "../signup/signup.css";

const Verification = () => {

  const [verification] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Container fluid className="h-100 auth-container">
      <Row className="h-100">
        <Col md="6" className="pt-5">
          <div className="auth-box mx-auto">
            <Link to="/">
              <img src={logo} alt="bloodnation logo" className="img-fluid mb-5"/>
            </Link>
            {verification?(
              <>
                <h2 className="display-4">
                  Verification<br />
                  Successful
                </h2>
                <p className="text-danger">Congratulation, your account have been verified and you can start donating.</p>
                <Button variant="outline-danger" as={Link} to="/signin" className="pt-2 pb-2" block>
                  Sign in
                </Button>
              </>
            ):(
              <>
                <h2 className="display-4">
                  Verification<br />
                  Failed
                </h2>
                <p className="text-danger">Sorry, your account could not be verified. Link must have expired.</p>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" className="pt-4 pb-4" />
                  </Form.Group>

                  <Button variant="danger" type="submit" className="mb-3 pt-2 pb-2" block>
                    Resend Link
                  </Button>
                </Form>
              </>
            )}


            <h5>
              {/* Didn't get confirmation link? */}
            </h5>

            <p className="text-center">Or Sign in with social media</p>
            <Button variant="outline-danger" className="pt-2 pb-2" block>
              Sign in with Google
            </Button>
            <Button variant="outline-danger" className="mb-3 pt-2 pb-2" block>
              Sign in with Facebook
            </Button>
            <h5>
              Don't have an account? <NavLink to="/signup"> Sign Up</NavLink>
            </h5>
          </div>
        </Col>
        <Col md="6" className="text-white text-center d-flex signup-red-box">
          <div className="signupbox one d-none d-md-block"></div>
          <div className="signupbox two d-none d-md-block"></div>
          <div className="signupbox five"></div>
          <div className="signupbox six"></div>
          <div className="signup-illustration-box my-auto mx-auto pt-3 pb-5">
            <h1 className="display-4 mt-4 mb-3">
              Verify Account <br /> to start
              Donating
            </h1>
            <img src={illustration} className="img-fluid illustration mb-3" alt="sign up" />
            <p className="mb-4 text-white">Give blood, do something amazing and save lives</p>
            <hr className="border" />
            <h5 className="mt-4">Dont have an account?</h5>
            <Button variant="light" as={NavLink} to="/signup" className="mb-3 pt-2 pb-2" block>
              Sign Up
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Verification
