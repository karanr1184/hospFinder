import "../assets/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import LoginSignup from "../Pages/LoginSignup";


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>

          <Route path= "/" element={<LoginSignup />} />
          <Route path= "/home" element={<Home />} />
          <Route path= "/about" element={<About />} />
        </Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
