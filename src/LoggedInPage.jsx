import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function LoggedInPage() {
  const username = sessionStorage.getItem("username");

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg border-0">
            <Card.Body className="text-center">
              <h2 style={{ color: "#4a90e2" }}>Welcome, {username}!</h2>
              <p className="mt-3">You have successfully logged in.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoggedInPage;



