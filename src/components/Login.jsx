import React, { useState } from "react";
import "../assets/registerStyle.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.email && user.password) {
            try {
                const response = await fetch(`http://localhost:3001/api/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });

                if (response.ok) {
                    alert("Login Successful!");
                    navigate("/home");
                } else {
                    alert("Invalid credentials");
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Please enter the email and password");
        }
    };

    const handleRegisterHospital = () => {
        window.open("/myForm", "_blank"); 
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
                    <input type="submit" value="Login" onClick={handleSubmit} />
                </div>
                <br />
                <br />
                <div className="signup-link">
                    Are you a hospital?{" "}
                    <button onClick={handleRegisterHospital}>Register Now</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
