import "../assets/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LoginSignup from "../Pages/LoginSignup";
import MyForm from "./MyForm";
import HospDetails from "../Pages/HospDetails";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginSignup />} />
					<Route path="/home" element={<Home />} />
					<Route path="/hospitalDetails/:name" element={<HospDetails />} />
					<Route path="/myform" element={<MyForm />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
