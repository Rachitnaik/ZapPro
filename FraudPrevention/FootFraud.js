import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./FootFraud.css";

export default function FootFraud() {
  return (
    <MDBFooter
      bgColor="transparent"
      className="text-center text-lg-left fixed-bottom footer"
    >
      <div
        className="text-center p-3"
        /* style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} */
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark">ICE CREAME AH</a>
      </div>
    </MDBFooter>
  );
}
