import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import illustration from "../../assets/images/undraw_team_work_k80m.svg";
import logo from '../../assets/images/logo_2.png'
import "../signup/signup.css";
import { serverRequest } from "../../utils/serverRequest";

const ConfirmRegistration = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const onSubmit = async data => {
    try {
      setIsSubmitting(true);
      const endpoint = `${process.env.REACT_APP_API}/verification/email/resend`;

      const response = await serverRequest().post(endpoint, data);
      if(response.data.status === 'success' ){
        setSuccess(true)
        setIsSubmitting(false);
      }
    } catch (error) {
      setError("invalid credentials");
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="h-100 auth-container">
      <Row className="h-100">
        <Col md="6" className="pt-5">
          <div className="auth-box mx-auto">
            <Link to="/">
              <img src={logo} alt="bloodnation logo" className="img-fluid mb-5"/>
            </Link>
            <h2 className="display-4">
              Confirm <br />
              Registration
            </h2>
            <p className="text-danger">Please check your email to click the confirmation link to get started with bloodnation</p>
            <h5>
              Didn't get confirmation link?
            </h5>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true })} className="pt-4 pb-4" />
              </Form.Group>

              <Button variant="danger" type="submit" disabled={isSubmitting} className="mb-3 pt-2 pb-2" block>
                {isSubmitting?'Loading...':'ReSend Link'}
              </Button>
              {error?(
                <Alert variant='warning' className="text-center">
                  {error}
                </Alert>
              ):null}
              {success?(
                <Alert variant='info' className="text-center">
                  Link sent successfully. Please check your inbox or span to confirm your registration
                </Alert>
              ):null}
            </Form>
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
              Confirm Registration <br /> to start
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
  );
};

export default ConfirmRegistration;
