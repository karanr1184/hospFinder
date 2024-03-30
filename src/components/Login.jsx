import React, { useState } from "react";
// import axios from "axios";
import "../assets/registerStyle.css";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Login() {

	// const history = useNavigate();
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	function handleChange(e){
		let name = e.target.name;
		let value = e.target.value;

		setUser({
			...user,
			[name]: value
		});
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(user.email && user.password){
			try{
				const response = await fetch(`http://localhost:3001/api/auth/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				})

				if(response.ok){
					alert("Login Successful!");
					navigate("/home")
				}
				else{
					alert("invalid credentials");
				}
			}
			catch(error){
				console.log(error);
			}
		}
		else
			alert("Please enter the email and password");
	}; 



	return (
		<div className="form-inner">
			<form className="login">
				<div className="field">
					<input
						type="email"
						onChange={handleChange}
						placeholder="Email Address"
						name="email"
						value={user.email}
						required
					/>
				</div>
				<div className="field">
					<input
						type="password"
						onChange={handleChange}
						placeholder="Password"
						name="password"
						value={user.password}
						minLength={8}
						required
					/>
				</div>

				<div className="field bt">
					<div className="btnlayer"></div>
					<input type="submit" value="Login" onClick={handleSubmit}/>
				</div>
				<br />
				<br />
				<div className="signup-link">
					Are you hospital?{" "}
					<a
						href="https://docs.google.com/forms/d/1FfCFcYX4fQpNAwHcKCmGDA7ckqhik3Q4xVhaYYwiEtw/edit"
						target="_blank"
					>
						Register Now
					</a>
				</div>
			</form>
		</div>
	);
}

export default Login;
