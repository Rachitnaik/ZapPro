import React from "react";
import { Container, Row, Col, Image, Nav, Navbar } from "react-bootstrap";

import "./FraudOverview.css";

const FraudOverview = () => {
  return (
    <Container fluid className="container">
      <Row xs={12} md={8}>
        <Col xs={12} md={8}>
          <h1 className="head">Open World platform API Overview</h1>
          <p className="content">
            The Open World platform offers a suite of API products, each
            containing a rich set of APIs that you can integrate into your
            existing services to optimize and grow your business. Open World
            platform APIs are offered as REST. All APIs have strong
            authentication and authorization via OAuth2.0 - your data always
            remains under your control.
            <br></br>
            Read Getting Started with APIs and then try out our APIs
            interactively in the API Explorer pages below.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FraudOverview;
