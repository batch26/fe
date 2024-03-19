import { Button, Image, Nav, NavDropdown, Navbar } from "react-bootstrap"

const Navigation = ({ logo }) => {
    return (

        <Navbar expand={"md"} variant={"light"}>
            <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </Button >
            <Navbar.Brand href="index.html"><Image src={logo} alt="admin template" /> </Navbar.Brand>
            <Navbar.Collapse id="navbarNavDropdown">
                <Nav className={"ml-auto stylish-nav"}>
                    <NavDropdown title="Demos" id="navbarDropdownMenuLink">
                        <NavDropdown.Item href="../main/index2.html" target="_blank">Main</NavDropdown.Item>
                        <NavDropdown.Item href="../minimal/index.html" target="_blank">Minimal</NavDropdown.Item>
                        <NavDropdown.Item href="../dark/index3.html" target="_blank">Dark</NavDropdown.Item>
                        <NavDropdown.Item href="../horizontal/index5.html" target="_blank">Horizontal</NavDropdown.Item>
                        <NavDropdown.Item href="../minisidebar/index4.html" target="_blank">Minisidebar</NavDropdown.Item>
                        <NavDropdown.Item href="https://wrappixel.com/demos/admin-templates/monster-admin/angular2demo/dist/" target="_blank">Angular starter kit</NavDropdown.Item>
                        <NavDropdown.Item href="../main-rtl/index.html" target="_blank">Main-RTL</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link href="../Documentation/document.html" target="_blank">Documentation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Button className={"m-t-5 btn btn-rounded btn-outline-success"} href="https://wrappixel.com/templates/monsteradmin/">BUY NOW</Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Navigation
