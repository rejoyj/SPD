import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav className="justify-content-center" variant="pills">
      <Nav.Item>
        <Nav.Link eventKey="link-1">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Setting</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Watch</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;