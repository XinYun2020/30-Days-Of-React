import React, { useState } from "react";
import Row from "react-bootstrap/row";
import Container from "react-bootstrap/Container";
import { Col, Tab, Nav } from "react-bootstrap";
import ReactSearchForm from "./ReactSearchForm";

export default function ReactTabSearchForm() {
  return (
    <Container>
      <Container className="p-5 mb-4 bg-light rounded-3">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="mb-3"
        >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Scire Invoice</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Scire Payment</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Fiannce NetSuite Posting</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ReactSearchForm />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {
                    "ReactScirePaymentSearchView.js => ReactScirePaymentSearchForm.js"
                  }
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {
                    "ReactFinanceNetsuitePostingSearchView.js => ReactFinanceNetsuitePostingSearchForm.js"
                  }
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
}
