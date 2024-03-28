import React from "react";
import { useForm } from "react-hook-form";
import '../assets/registerStyle.css';

function Login(props) {
	
  return ( 
	<div className = "form-inner">
        <form className="login" method="post">
          <div className="field">
            <input type="email" placeholder="Email Address" name="email" required />
          </div>
          <div className="field">
            <input type="password" placeholder="Password" name="password" minLength={8} required />
          </div>
          
          <div className="field bt">
            <div className="btnlayer"></div>
            <input type="submit" value={props.type} 
			/>
          </div>
		  <br />{props.type === "Login" && <br />}
          <div className = "signup-link">Are you hospital? <a
              href="https://docs.google.com/forms/d/1FfCFcYX4fQpNAwHcKCmGDA7ckqhik3Q4xVhaYYwiEtw/edit"
              target="_blank">Register Now</a>
		</div>
        </form>
	</div>
  	);
}

export default Login;
