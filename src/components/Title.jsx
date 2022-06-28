import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Title() {
  return (
    <div className="header_title">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">X-COFFEE</div>
            <div className="title">BEST COFFEE IN TOWN</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Title;
