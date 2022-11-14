import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const links = ["MESAS", "SILLAS", "ESTANTERIAS", "ESCRITORIOS", "DECORACION"];

export const NavBar = ({logo, icon1, icon2}) => {
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
                            <Navbar.Brand>
                                <Link to={`/`}>
                                    <img src = {logo} alt = "logo" />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title className="navbar_title" id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    MENÚ PRINCIPAL
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    {links.map ((elemento) => {
                                        return (
                                            <Nav className="navbar_body justify-content-end flex-grow-1 pe-3">
                                                    <Nav.Link className="navbar_categorias">
                                                        <Link className="navbar_items" to={`/categoria/${elemento.toLowerCase()}`} key={elemento}>{elemento}</Link>
                                                    </Nav.Link>
                                            </Nav>
                                        )
                                    })}
                                    <div className='navbar_icons'>
                                        {/* <Link to={`/usuario`}>{icon1}</Link> */}
                                        <Link to={`/carrito`}>{icon2}</Link>
                                    </div>
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