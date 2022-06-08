import React from "react";
import { Form, Col } from "react-bootstrap";
import Row from "react-bootstrap/row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function ReactFinanceInvestigationToolView() {
  return (
    <div>
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Finance</Breadcrumb.Item>
            <Breadcrumb.Item active>Finance Investigation Tool</Breadcrumb.Item>
          </Breadcrumb>

          <h1 className="header">Finance Investigation Tool</h1>
          <br />

          <Row className="mx-5">
            <Button as={Col} variant="outline-dark" size="lg">
              Scire Invoice
            </Button>
            <Button as={Col} variant="outline-dark" className="mx-5" size="lg">
              Scire Payment
            </Button>
            <Button as={Col} variant="outline-dark" size="lg">
              Finance NetSuite Posting
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
