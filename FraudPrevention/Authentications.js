import React from "react";
import { Container, Row, Col, Image, Nav, Navbar } from "react-bootstrap";

import "./Authentication.css";

const Authentications = () => {
  return (
    <>
      <Container fluid className="container">
        <Row xs={12} md={8}>
          <Col xs={12} md={9}>
            <h1 className="head">API Authentication and Authorization</h1>
            <p className="content">
              Authorization and authentication (sometimes abbreviated as AuthN
              and AuthZ) are two separate functions that help secure access to
              your APIs and data.
            </p>
            {/*  <Image src="image.jpg" alt="Image" fluid /> */}
            <h2 className="head">About Tokens</h2>
            <p className="content">
              OAuth2.0 is an industry standard protocol that uses tokens
              (alphanumeric strings) to establish proof of authentication and
              authorization. A token includes this information:
            </p>
            <p className="content">
              Authentication: Acquire a Token <br></br>
              An API client must acquire a token prior to making an API request,
              and that is when authentication is performed. Tokens are provided
              through a special API endpoint that uses HTTP Basic Auth. You must
              provide the key as the username and the secret as the password.
            </p>
            <h3 className="head">The Token API</h3>
            <p className="content">
              Use this API to acquire a token from within your client software:
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Authentications;
