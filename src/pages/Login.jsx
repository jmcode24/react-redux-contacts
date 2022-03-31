import React, {useState} from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase/config";
import firebase1 from "firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);

      navigate("/", { replace: true });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async (e) => {
    try {
      e.preventDefault();

      const provider = new firebase1.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md="6" className="mx-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded">
          <h1 className="text-center fw-bold mt-2 mb-3 text-warning fst-italic">Sign in</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-light fs-6 fw-bold">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
      
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-light fs-6 fw-bold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between mt-2">
                  <Button disabled={loading} variant="outline-primary" type="submit" onClick={handleLogin}>
                    {loading ? (
                      <i>
                        <Spinner as="span" animation="grow" variant="light" size="sm" role="status" aria-hidden="true"/> Signing in
                      </i>) : ("Sign in")}
                  </Button>
                  <Button variant="outline-success" type="submit" onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
                <h6 className="mt-3 mb-4 text-center">
                  <span className="fst-italic text-muted">Don't have an account? </span> <br/> <Link to="/register"> Sign up</Link>
                </h6>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;