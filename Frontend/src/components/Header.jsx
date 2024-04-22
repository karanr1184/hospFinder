import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { FaRegUserCircle } from "react-icons/fa";
import logo_1 from "../assets/logo_1.png";

function Header() {
	const currentPath = window.location.pathname;
	return (
		<>
			<Navbar bg="primary" data-bs-theme="dark" style={{background: "-webkit-linear-gradient(left, #003366,#004080,#0059b3, #0073e6)",  position: "fixed", top: "0", width: "100%", zIndex: 2}}>
				<Container style={{marginTop: '10px'}}>
					<Navbar.Brand style={{marginLeft: '50px'}} href={currentPath === '/' ? '/' : '/home'}><img style={{width: 175}} src={logo_1} alt="logo"/></Navbar.Brand>
					<Nav className="mx-auto" >
						<Nav.Link href={currentPath === '/' ? '/' : '/home'} style={{color: 'white', fontSize: 18}}>Home</Nav.Link>
						<Nav.Link href="#features" style={{color: 'white', fontSize: 18}}>Features</Nav.Link>
						<Nav.Link href="#about" style={{color: 'white', fontSize: 18}}>About Us</Nav.Link>
						<Nav.Link href="#contact" style={{color: 'white', fontSize: 18}}>Contact Us</Nav.Link>
					</Nav>
				{(currentPath === '/' ? <Button variant="light" href='/'>Login</Button> : <FaRegUserCircle size={35} />)}
				
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
