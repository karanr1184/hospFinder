import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../assets/indexCSS.css";
import maps_laptop from "../assets/maps_laptop.png";

const FeaturesSection = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="features">
		<div>
			<div
				className="jumbotron jumbotron-fluid feature"
				
				style={{
					background:
						"-webkit-linear-gradient(left, #003366,#004080,#0059b3, #0073e6)",
				}}
			>
				<div className="container my-4"  >
					<h2
						className="text-center font-weight-bold my-5 head" 
					>
						Features
					</h2>
					<div className="row justify-content-between text-center text-md-left">
						<div
							data-aos="fade-down-right"
							data-aos-duration="1000"
							className="col-md-6"
							style={{ padding: "50px"}}
						>
							<h2 className="font-weight-bold indextitle" id="name">
								Hospital in close proximity.
							</h2>
							<p className="my-4 feat">
								Access hospitals nearby your current location
								<br /> or search locations to get the hospitals in nearby
								vicinity{" "}
							</p>
							<a
								href="#"
								className="indexbtn"
							>
								Get Started
							</a>
						</div>
						<div
							data-aos="fade-down-left"
							data-aos-duration="1000"
							className="col-md-6 align-self-center"
						>
							<img
								src={maps_laptop}
								id="photo"
								alt="Maps with Laptop"
								className="mx-auto d-block"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default FeaturesSection;
