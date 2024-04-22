import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { Button, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import GetApt from "./GetApt";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </header>
      <br></br>
      <Navbar
        expand="lg"
        className="nav-contents justify-content-center  fw-bold "
      >
        <Nav className="w-100 justify-content-between px-4 fw-bold ">
          <Nav.Item>
            <DropdownButton
              title="Popular"
              variant="light"
              className="border rounded fw-bold"
            ></DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Discover</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Animation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Branding</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Illustration</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Mobile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Print </Nav.Link>
          </Nav.Item>
          <Nav.Link href="#">
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "#a6a6a6" }}
              size="md"
            />{" "}
          </Nav.Link>
          <Nav.Item>
            <Button variant="light" className="border rounded-5 fw-bold">
              {" "}
              <FontAwesomeIcon
                icon={faFilter}
                style={{ color: "#a6a6a6" }}
                size="lg"
              />{" "}
              Filters
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>

      <br></br>
      <GetApt />
    </div>
  );
}

export default App;
