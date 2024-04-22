import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/indexCSS.css";
import "../assets/doctor.css";
import { useNavigate, useParams } from "react-router-dom";

function HospDetails() {
	const params = useParams();
	const navigate = useNavigate();
	const hospitalName = params.name;

	const [hospDet, setHospDet] = useState({});

	const hospExist = async (req, res) => {
		try {
			const response = await fetch(
				`https://hospfinder.onrender.com/api/auth/hospitalDetails`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ hospitalName }),
				}
			);

			if (!response.ok) {
				alert("Hospital not registered!");
				window.close();
			} else {
				const data = await response.json();
				await setHospDet(data.hosp);
			}
		} catch (error) {
			console.error("Fetch error:", error);
		}
	};

	useEffect(() => {
		hospExist();
	}, []);

	console.log(hospDet.doctors);

	return (
		<div>
			<Header />
			<div id="hdetails">
				<h5 id="dhead">{params.name}</h5>

				<div className="table-data">
					<div className="order">
						<div className="dhead">
							<h3>Hospital Details</h3>
						</div>
						<hr />
						<table>
							<tbody>
								<tr>
									<td>Address</td>
									<td>{hospDet.address ? hospDet.address : <p>Loading...</p>}</td>
								</tr>
								<tr>
									<td>Phone. No</td>
									<td>{hospDet.phoneNumber ? hospDet.phoneNumber : <p>Loading...</p>}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="table-data">
					<div className="order">
						<div className="dhead">
							<h3>Doctor Details</h3>
						</div>
						<hr />
						<table>
							<thead>
								<tr>
									<th>Doctor Name</th>
									<th>Speciality</th>
									<th>Phone No.</th>
								</tr>
							</thead>
							<tbody>
									{hospDet && hospDet.doctors ? (hospDet.doctors.map((doctor, index) => (
                                        <tr>
                                            <td>
                                                {doctor.name}
                                            </td>
                                            <td>
                                                {doctor.specialization}
                                            </td>
                                            <td>
                                                {doctor.dnumber}
                                            </td>
                                        </tr>
									)))
                                    :
                                    <p>Loading...</p>
                                    }
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default HospDetails;
