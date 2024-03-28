import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.css';


function Header() {
	return (
		<>
			<Navbar bg="primary" data-bs-theme="dark" style={{background: "-webkit-linear-gradient(left, #003366,#004080,#0059b3, #0073e6)",  position: "fixed", top: "0", width: "100%"}}>
				<Container>
					<Navbar.Brand href="#home">HospFinder</Navbar.Brand>
					<Nav className="mx-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">About Us</Nav.Link>
						<Nav.Link href="#pricing">Contact Us</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
