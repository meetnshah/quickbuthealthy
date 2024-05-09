import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const OrderPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // ...
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mt-4">Place Your Order</h2>
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            {/* Add more form fields as needed */}

            <Button variant="primary" type="submit" className="mt-3">
              Submit Order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
