import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase/config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      firebase.auth().createUserWithEmailAndPassword(email, password);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md="6" className="mx-auto bg-dark p-3 mt-5">
          <h1 className="text-center fw-bold mt-2 mb-3 text-info fst-italic">Sign Up</h1>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-light fs-6 fw-bold">Email address</Form.Label>
            <Form.Control
              type="email" required
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-light fw-bold fs-6">Password</Form.Label>
            <Form.Control
              type="password" required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Form.Text className="text-muted">
              Your password should be reliable.
            </Form.Text>
          </Form.Group>
          <Button variant="outline-primary" type="submit" onClick={handleSignUp}>
            Sign up
          </Button>
          <h6 className="mt-3 mb-4 text-center">
            <span className="fst-italic text-muted">Already have an account? </span> <br/> <Link to="/login">Sign in</Link>
          </h6>
        </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;