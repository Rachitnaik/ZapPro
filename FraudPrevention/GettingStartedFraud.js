import React from "react";
import { Container, Row, Col, Image, Nav, Navbar } from "react-bootstrap";

import "./GettingStartedFraud.css";

const GettingStartedFraud = () => {
  return (
    <>
      <Container fluid className="container">
        <Row xs={12} md={8}>
          <Col xs={12} md={8}>
            <h1 className="head">
              Getting Started with Expedia’s Fraud Prevention
            </h1>
            <p className="content">
              Welcome to Expedia’s Fraud Prevention! Please use the following
              guide to set up your integration.
            </p>
            {/*  <Image src="image.jpg" alt="Image" fluid /> */}
            <h2 className="head">What You'll Need:</h2>
            <p className="content">
              1.TrustWidget <br></br>2.Download the Open World Platform SDK and
              Authenticate
            </p>
            <h3 className="head">Trust Widget</h3>
            <p className="content">
              The Trust Widget is lightweight, non-blocking JavaScript that
              collects user device data as the user navigates through the check
              out process. The data collected by the Trust Widget is used
              alongside the Booking Screen API to help make a Fraud decision.
            </p>
            <h6 className="head">High Level Integration Flow</h6>
            <Image className="img" src="./trustflow.png" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GettingStartedFraud;
