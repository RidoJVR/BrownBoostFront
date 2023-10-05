import { Link, useNavigate } from "react-router-dom";
import storage from "../Storage/Storage";
import axios from "axios";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const AppNav = () => {
  const go = useNavigate();
  const logout = async () => {
    storage.remove("authToken");
    storage.remove("authUser");
    await axios.get("/logout", storage.get("authToken"));
    go("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/inicio">BrownBoost</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Publicaciones
            </Nav.Link>
          </Nav>
          <NavDropdown title="Usuario" id="basic-nav-dropdown">
              <NavDropdown.Item href="/crear_publicacion">Productos</NavDropdown.Item>
              <NavDropdown.Item href="/ver_publicacion">Comentarios</NavDropdown.Item>
              <NavDropdown.Item href="/registro">Registrarse</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contacto">
                Contactanos
              </NavDropdown.Item>
            </NavDropdown>
          <Nav>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNav;
