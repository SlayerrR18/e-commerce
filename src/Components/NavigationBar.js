import { Navbar, Container, Nav } from "react-bootstrap";
import logoAwal from "../Image/bg/logo-1.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="bg-light" fixed="top" style={{width:'100%', height: '10%', borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logoAwal}
              width="40px"
              height="40px"
              className="d-inline-block align-top"
            />{" "}
            Shooper
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#Shoes">SHOES</Nav.Link>
            <Nav.Link href="#Sandals">SANDALS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
