import * as React from "react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Btn from "./Btn";

import "../assets/Body.css";
import { type } from "@testing-library/user-event/dist/type";

function Body() {
	const [login, setLogin] = useState(true);
	const [signUp, setSignUp] = useState(false);

	function handleLogin() {
		setLogin(true);
		setSignUp(false);
	}

	function handleSignup() {
		setLogin(false);
		setSignUp(true);
	}

	return (
		<div className="wrapper">
			<h1 className="title">{login ? "Login Form" : "Signup Form"}</h1>
			<Btn handleClick={handleLogin} type={login} name="Login"></Btn>
			<Btn handleClick={handleSignup} type={signUp} name="Signup"></Btn>
			{login ? <Login /> : <Signup />}
		</div>
	);
}

export default Body;
