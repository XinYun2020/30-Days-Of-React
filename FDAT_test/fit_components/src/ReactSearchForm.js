import React, { useState } from "react";
import { Form, Col, Toast } from "react-bootstrap";
import Row from "react-bootstrap/row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Collapse from "react-bootstrap/Collapse";

export default function ReactSearchForm() {
  const [open, setOpen] = useState(false);

  const [show, toggleShow] = useState(false);
  const [radioValue, setRadioValue] = useState("");

  const radios = [
    { name: "Select by week", value: "1" },
    { name: "Select by financial month", value: "2" },
  ];

  return (
    <Container>
      <h1 className="header">Find Invoice</h1>
      <br />
      <Row className="mx-5">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formInvoiceNumber">
            <Form.Label column sm="3" className="text-end">
              Invoice Number
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="Please enter the invoice number"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInvoiceNumber">
            <Form.Label column sm="3" className="text-end">
              Customer ID
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="Please enter the customer ID"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInvoiceNumber">
            <Form.Label column sm="3" className="text-end">
              Practice Name
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="Please enter the Practice Name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInvoiceNumber">
            <Form.Label column sm="3" className="text-end">
              Bulk Bill Ref
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="Please enter the Bulk Bill Ref"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInvoiceNumber">
            <Form.Label column sm="3" className="text-end">
              Range of Date
            </Form.Label>
            <Col sm="9">
              {!show && (
                <ButtonGroup className="mb-3 gap-2 col-md-auto">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="outline-secondary"
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => {
                        setRadioValue(e.currentTarget.value);
                        toggleShow(true);
                      }}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              )}
              <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                  {radioValue == 1 && (
                    <Col sm="9">
                      <Form.Control
                        type="week"
                        placeholder="Please enter the Range of Date"
                      />
                    </Col>
                  )}

                  {radioValue == 2 && (
                    <Col sm="9">
                      <Form.Control
                        type="month"
                        placeholder="Please enter the Range of Date"
                      />
                    </Col>
                  )}
                </Toast.Header>
              </Toast>
            </Col>
          </Form.Group>
        </Form>
      </Row>

      <br />
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary">Submit</Button>
        </Col>
        <Col md={{ span: 4 }}>
          <Button
            onMouseEnter={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open}
            variant="warning"
          >
            Help
          </Button>
          <Collapse in={open}>
            <div id="collapse-text ">This is a helper section</div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
}
