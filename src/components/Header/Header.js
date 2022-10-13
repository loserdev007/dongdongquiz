import "./Header.css";
import React from "react";
import png from "../../assets/quiz.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

const Header = () => {
   let activeStyle = {
      color: "red",
   };

   return (
      <>
         <Navbar id="dong-navbar" expand="lg" className="py-3 fixed-top">
            <Container>
               <Navbar.Brand
                  href="/"
                  className="fs-2 fw-bold text-white navbar-title"
               >
                  <img
                     alt=""
                     src={png}
                     width="50"
                     height="50"
                     className="d-inline-block align-middle me-3"
                  />{" "}
                  Dong Dong Quiz
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
               <Navbar.Offcanvas
                  id="offcanvasNavbar-expand-md"
                  aria-labelledby="offcanvasNavbarLabel-expand-md"
                  placement="end"
               >
                  <Offcanvas.Header closeButton>
                     <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                        Offcanvas
                     </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                     <Nav className="justify-content-end flex-grow-1 pe-3 nav-links">
                        <NavLink
                           to="home"
                           style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                           }
                           className="fs-5 mx-3 px-1"
                        >Topics</NavLink>
                        <NavLink
                           to="statistic"
                           style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                           }
                           className="fs-5 mx-3 px-1"
                        >Statistics</NavLink>
                        <NavLink
                           to="blog"
                           style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                           }
                           className="fs-5 mx-3 px-1"
                        >Blogs</NavLink>
                        {/* <NavDropdown
                           title="Dropdown"
                           id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                           <NavDropdown.Item href="#action3">
                              Action
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action4">
                              Another action
                           </NavDropdown.Item>
                           <NavDropdown.Divider />
                           <NavDropdown.Item href="#action5">
                              Something else here
                           </NavDropdown.Item>
                        </NavDropdown> */}
                     </Nav>
                     {/* <Form className="d-flex">
                        <Form.Control
                           type="search"
                           placeholder="Search"
                           className="me-2"
                           aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                     </Form> */}
                  </Offcanvas.Body>
               </Navbar.Offcanvas>
            </Container>
         </Navbar>
      </>
   );
};

export default Header;
