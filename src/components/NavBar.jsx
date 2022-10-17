import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarOffcanvas = ({logo, item1, item2, item3, item4, item5, item51, item52, item53, item5Todo, icon1, icon2}) => {
    return (
        <>
        {['sm'].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3">
                <Container className= "header_navbar" fluid>
                    <Navbar.Brand>
                        <img src = {logo} alt = "logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="navbar_title" id={`offcanvasNavbarLabel-expand-${expand}`}>
                            MENÚ PRINCIPAL
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="navbar_body justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className="navbar_items" href="#action1">{item1}</Nav.Link>
                                <Nav.Link className="navbar_items" href="#action2">{item2}</Nav.Link>
                                <Nav.Link className="navbar_items" href="#action3">{item3}</Nav.Link>
                                <Nav.Link className="navbar_items" href="#action4">{item4}</Nav.Link>
                                <NavDropdown className="navbar_items"
                                    title = {item5}
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item className="navbar_items2" href="#action5">{item51}</NavDropdown.Item>
                                    <NavDropdown.Item className="navbar_items2" href="#action6">{item52}</NavDropdown.Item>
                                    <NavDropdown.Item className="navbar_items2" href="#action7">{item53}</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="navbar_items2" href="#action8">{item5Todo}</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <div className='navbar_icons'>{icon1} {icon2}</div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
        </>
    );
}

export default NavbarOffcanvas;