import { Navbar, Nav, Container } from 'react-bootstrap';



export default function Menu() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Diam-Jewel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Diamonds</Nav.Link> */}
                            <Nav.Link href="./Appointment">Appointment</Nav.Link>
                         
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Wishlist
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>)
}
