import React from "react";
import { Container, Row, Col, Image, Nav, Navbar } from "react-bootstrap";

import "./ApiGettingStarted.css";

const ApiGettingStarted = () => {
  return (
    <>
      <Container fluid className="container">
        <Row xs={12} md={8}>
          <Col xs={12} md={8}>
            <h1 className="head">Getting Started with APIs</h1>
            <p className="content">
              To use the Open World platform APIs you must create one or more
              API clients. An API client is like a password-protected user
              account – essentially, it establishes that the software making an
              API request belongs to you (Authentication), and allows you limit
              the types of APIs requests each client can make (Authorization).
            </p>
            {/*  <Image src="image.jpg" alt="Image" fluid /> */}
            <h2 className="head">Create an API Client</h2>
            <p className="content">
              You can create and manage your API clients in the Console.
            </p>
            <p className="content">
              Steps: <br></br>
              1.Log in to your existing account, or set up a new user account
              and provide the required basic information about your business{" "}
              <br></br>2. (Optional) create a new Partner Account to use for
              testing <br></br>3. Select & configure the product you want to use
            </p>
            <h3 className="head">Select Products and Scopes</h3>
            <p className="content">
              All API clients operate within a single Partner Account. You can
              select and configure multiple products under a single Partner
              Account, and all configured products will be listed when you
              create a new client. You can create a single API client and grant
              it access to one or more of the products in the Partner Account.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ApiGettingStarted;
