import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import "../assets/indexCSS.css";
import manthan_photo from'../assets/manthan_photo.png';
import karan_photo from'../assets/karan_photo.png';
import AOS from 'aos';

function About() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<div className="container" id='about'>
				<h2
					className="text-center font-weight-bold my-5 head"
                    >
					About Us
				</h2>
				<br />
				<div className="row">
					<div
						data-aos="fade-up"
						data-aos-delay="300"
						data-aos-duration="1000"
						className="col-md-4 text-center mem"
					>
						<img src={manthan_photo} alt="Manthan Shah" id="photo" />{" "}
						<br />
						<h4 id="name">Manthan Shah</h4>
						<p id="details">
							Currently pursuing B.Tech in Computer Engineering from PDEU. Avid
							reader who also likes to trek and travel alot.
						</p>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="300"
						data-aos-duration="1000"
						className="col-md-4 text-center mem"
					>
						<img src={karan_photo} alt="Karan Rathod" id="photo" />{" "}
						<br />
						<h4 id="name">Karan Rathod</h4>
						<p id="details">
							Currently pursuing B.Tech in Computer Engineering from PDEU.
							Learner who is constantly striving for the Development.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
