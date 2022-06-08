import React from "react";
import { Col, CardGroup } from "react-bootstrap";
import Row from "react-bootstrap/row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";

export default function ReactFinanceInvoiceDetailView() {
  const tableHeader = [``, ``, ``, ``, ``, ``];
  return (
    <div>
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Finance</Breadcrumb.Item>
            <Breadcrumb.Item active>Finance Investigation Tool</Breadcrumb.Item>
            <Breadcrumb.Item active>Invoice - #</Breadcrumb.Item>
          </Breadcrumb>

          <CardGroup className="gap-2" md={2}>
            <Card>
              <Card.Body>
                <Card.Title>Card replaced Panel in bs-5</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Finance data</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Vertical scrolling section</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">PMS data</small>
              </Card.Footer>
            </Card>
          </CardGroup>
          <br />
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  {Array.from({ length: 7 }).map((_, idx) => (
                    <Col>
                      <Card xborder="dark">
                        <Card.Header className="text-start">Header</Card.Header>
                        <Card.Body>
                          <Card.Title> </Card.Title>
                          <Card.Text>Table</Card.Text>
                        </Card.Body>
                      </Card>
                      <br />
                    </Col>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
