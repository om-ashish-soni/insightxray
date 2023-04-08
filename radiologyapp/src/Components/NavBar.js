import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="light" expand="md">
      <Nav.Item className="">&nbsp;</Nav.Item>
      <Navbar.Brand className="ml-auto">InsightXray</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
            
          <Nav.Item>
            <Nav.Link as={Link} to="/upload-image">
              Upload Xray
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/guide">
              Guide
            </Nav.Link>
          </Nav.Item>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
