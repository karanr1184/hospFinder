import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/formStyle.css';


function MyForm() {
  const navigate = useNavigate();

  const [hospitalData, setHospitalData] = useState({
    hospitalName: '',
    address: '',
    phoneNumber: '',
    doctorsCount: 0,
    doctors: []
  });

  const handleHospitalChange = (e) => {
    const { name, value } = e.target;
    setHospitalData({
      ...hospitalData,
      [name]: value
    });
  };

  const handleDoctorChange = (index, e) => {
    const { name, value } = e.target;
    const doctors = [...hospitalData.doctors];
    doctors[index] = {
      ...doctors[index],
      [name]: value
    };
    setHospitalData({
      ...hospitalData,
      doctors: doctors
    });
  };

  const handleDoctorCountChange = (e) => {
    const count = parseInt(e.target.value);
    if (count >= 1 && count <= 10) {
      setHospitalData({
        ...hospitalData,
        doctorsCount: count,
        doctors: Array(count).fill({ name: '', specialization: '', dnumber: '' }) // Initialize array with empty doctor objects
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    if (hospitalData.hospitalName && hospitalData.address && hospitalData.phoneNumber) {
      if (hospitalData.doctorsCount > 0) {
        try {
          const response = await fetch(`http://localhost:3001/api/auth/hospitalReg`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(hospitalData),
          });

          if (response.ok) {
            alert("Registration Successful!");
            navigate("/");
          } else {
            alert("Hospital already registered!");
          }
        } catch (error) {
          console.log(error);
        }
      }
      else {
        alert("There should be minimum 1 doctor.")
      }
    }
    else
      alert("Please fill the data.")
  };

  return (
    <div className='form-container'>
      <form style={{ color: "white" }} onSubmit={handleSubmit}>
        <h1>Hospital Registration</h1>
        <label>
          Hospital Name:
          <input
            type="text"
            name="hospitalName"
            value={hospitalData.hospitalName}
            onChange={handleHospitalChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={hospitalData.address}
            onChange={handleHospitalChange}
          />
        </label>
        <label>
          Hospital Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={hospitalData.phoneNumber}
            onChange={handleHospitalChange}
          />
        </label>
        <label>
          Number of Doctors:
          <input
            type="number"
            name="doctorsCount"
            value={hospitalData.doctorsCount}
            onChange={handleDoctorCountChange}
          />
          
        </label>
        {hospitalData.doctors.map((doctor, index) => (
          <div key={index}>
            <h5 className='doc'>Doctor {index + 1}</h5>
            <label>
              Name:
              <br />
              <input
                type="text"
                name="name"
                value={doctor.name}
                onChange={(e) => handleDoctorChange(index, e)}
              />
            </label>
            <label>
              Specialization:
              <input
                type="text"
                name="specialization"
                value={doctor.specialization}
                onChange={(e) => handleDoctorChange(index, e)}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="dnumber"
                value={doctor.dnumber}
                onChange={(e) => handleDoctorChange(index, e)}
              />
            </label>
          </div>
        ))}
        <div className='bt'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
