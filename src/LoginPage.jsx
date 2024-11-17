import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() && /^\d{7}$/.test(pin)) {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("pin", pin);
      navigate("/logged-in");
    } else {
      setError("Please enter a valid username and a 7-digit PIN.");
    }
  };

  return (
    <Container fluid  style={{ backgroundColor: "#432E54" }}>
      <Row >
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <h2 style={{ color: "#4a90e2" }}>Welcome Back!</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="pin" className="mb-3">
                  <Form.Label>7-Digit PIN </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your PIN"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="w-100 mt-3"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
