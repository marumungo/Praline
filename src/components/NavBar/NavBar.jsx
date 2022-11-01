import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const NavBar = ({logo, item1, item2, item3, item4, item5, item51, item52, item53, icon1, icon2}) => {
    return (
        <>
        {['sm'].map((expand) => (
            <header className='header'>
                <div className="header_top">
                    <p>HASTA 6 CUOTAS SIN INTERÉS</p>
                </div>
                <div className='header_navbar'>
                    <Navbar key={expand} expand={expand} className="mb-3">
                        <Container className= "header_navbar" fluid>
                            <Navbar.Brand href="/">
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
                                        <Nav.Link className="navbar_items" href="/categoria/mesas">{item1}</Nav.Link>
                                        <Nav.Link className="navbar_items" href="/categoria/sillas">{item2}</Nav.Link>
                                        <Nav.Link className="navbar_items" href="/categoria/estanterias">{item3}</Nav.Link>
                                        <Nav.Link className="navbar_items" href="/categoria/escritorios">{item4}</Nav.Link>
                                        <NavDropdown className="navbar_items"
                                            title = {item5}
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item className="navbar_items2" href="/categoria/plantas">{item51}</NavDropdown.Item>
                                            <NavDropdown.Item className="navbar_items2" href="/categoria/adornos">{item52}</NavDropdown.Item>
                                            <NavDropdown.Item className="navbar_items2" href="/categoria/lamparas">{item53}</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <div className='navbar_icons'>{icon1} {icon2}</div>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>
            </header>
        ))}
        </>
    );
}