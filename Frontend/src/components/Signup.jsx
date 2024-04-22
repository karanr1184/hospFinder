import React, { useState } from "react";
import "../assets/registerStyle.css";
import Button from 'react-bootstrap/Button';

function Signup(props) {

  const [user, setUser] = useState({
    'email': "",
    'password': ""
  });

  const [cPassword, setCPassword] = useState("");

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
      if (user.password === cPassword) {
        try {
          const response = await fetch(`https://hospfinder.onrender.com/api/auth/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          if (!response.ok) {
            alert("User already registered! Please Login.");
          }
          else {
            alert("Registration Successful. Please Login.")
          }
          window.location.reload();
        } catch (error) {
          console.error("Registration error:", error);
        }
      } else {
        alert("Password and confirm password don't match.");
      }
    } else {
      alert("Please enter the email, password, and confirm password.");
    }
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

        <div className="field">
          <input
            type="password"
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
            placeholder="Confirm Password"
            name="cpassword"
            value={cPassword}
            minLength={8}
            required
          />
        </div>

        <div className="field bt">
          <div className="btnlayer"></div>
          <input type="submit" value="Sign up" onClick={handleSubmit} />
        </div>
        <br />
        {props.type === "Login" && <br />}
        <div className="signup-link">
          Are you a hospital?{" "}
          <Button variant="info" size="sm" href="/MyForm" target="_blank" style={{ color: "#000080" }}>Register Now</Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
