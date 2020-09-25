import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo_2.png";
import illustration from "../../assets/images/undraw_team_work_k80m.svg";
import { AUTH_PROFILE_RESOLVED } from "../../store/types/authTypes";
import { serverRequest } from "../../utils/serverRequest";
import "../signup/signup.css";

const CompleteRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const { push } = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const { user, token } = useSelector(state => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const endpoint = `${process.env.REACT_APP_API}/users/${user._id}`;

      const response = await serverRequest(token).post(endpoint, data);
      if (response.data.status === "success") {
        setSuccess(true);
        setIsSubmitting(false);
        //dispatch to update user profile in store
        dispatch({ type: AUTH_PROFILE_RESOLVED, payload: response.data.data})
        push('/dashboard');
      }
    } catch (error) {
      setError(error.response.data.message || error.response.data.error);
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="h-100 auth-container">
      <Row className="h-100">
        <Col md="6" className="pt-5">
          <div className="auth-box mx-auto">
            <Link to="/">
              <img src={logo} alt="bloodnation logo" className="img-fluid mb-5" />
            </Link>
            <h2 className="display-4">
              Complete <br />
              Registration
            </h2>
            <p className="text-danger">
              Please complete this last step to get started with bloodnation
            </p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control type="text" placeholder="Firstname" name="firstname" ref={register({ required: true })} className="pt-4 pb-4" />
              </Form.Group>

              <Form.Group>
                <Form.Control type="text" placeholder="Lastname" name="lastname" ref={register({ required: true })} className="pt-4 pb-4" />
              </Form.Group>

              <Form.Group>
                <Form.Control type="tel" placeholder="+234..." name="phone" ref={register({ required: true })} className="pt-4 pb-4" />
              </Form.Group>

              <Form.Group>
                <Form.Control type="text" placeholder="address" name="address" ref={register({ required: true })} className="pt-4 pb-4" />
              </Form.Group>

              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Blood Group</Form.Label>
                <Form.Control name="bloodGroup" ref={register({ required: true })} as="select" style={{height: '50px'}} custom>
                  <option value="">- Pick a Blood Group -</option>
                  <option value="A+">A RhD positive (A+)</option>
                  <option value="A-">A RhD negative (A-)</option>
                  <option value="B+">B RhD positive (B+)</option>
                  <option value="B-">B RhD negative (B-)</option>
                  <option value="O+">O RhD positive (O+)</option>
                  <option value="O-">O RhD negative (O-)</option>
                  <option value="AB+">AB RhD positive (AB+)</option>
                  <option value="AB-">AB RhD negative (AB-)</option>
                </Form.Control>
              </Form.Group>

              <Button variant="danger" type="submit" disabled={isSubmitting} className="mb-3 pt-2 pb-2" block>
                {isSubmitting ? "Loading..." : "Complete"}
              </Button>
              {error ? (
                <Alert variant="warning" className="text-center">
                  {error}
                </Alert>
              ) : null}
              {success ? (
                <Alert variant="info" className="text-center">
                  Successfully completed registration. <br/>
                  <Button variant="outline-danger" as={Link} to="/dashboard" type="button" className="mb-3 pt-2 pb-2 mt-3" block>
                    Go Dashboard
                  </Button>
                </Alert>
              ) : null}
            </Form>
          </div>
        </Col>
        <Col md="6" className="text-white text-center d-flex signup-red-box">
          <div className="signupbox one d-none d-md-block"></div>
          <div className="signupbox two d-none d-md-block"></div>
          <div className="signupbox five"></div>
          <div className="signupbox six"></div>
          <div className="signup-illustration-box my-auto mx-auto pt-3 pb-5">
            <h1 className="display-4 mt-4 mb-3">
              Complete Registration <br /> to start Donating
            </h1>
            <img src={illustration} className="img-fluid illustration mb-3" alt="sign up" />
            <p className="mb-4 text-white">Give blood, do something amazing and save lives</p>
            <hr className="border" />
            <h5 className="mt-4">Need help?</h5>
            <Button variant="light" as={NavLink} to="/contact" className="mb-3 pt-2 pb-2" block>
              Contact Us
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CompleteRegistration;
