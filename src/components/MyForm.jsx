import React, { useState } from 'react';

function MyForm() {
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
    setHospitalData({
      ...hospitalData,
      doctorsCount: count,
      doctors: Array(count).fill({ name: '', specialization: '' }) // Initialize array with empty doctor objects
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', hospitalData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hospital Name:
        <input 
          type="text"
          name="hospitalName"
          value={hospitalData.hospitalName}
          onChange={handleHospitalChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input 
          type="text"
          name="address"
          value={hospitalData.address}
          onChange={handleHospitalChange}
        />
      </label>
      <br />
      <label>
        Hospital Phone Number:
        <input 
          type="tel"
          name="phoneNumber"
          value={hospitalData.phoneNumber}
          onChange={handleHospitalChange}
        />
      </label>
      <br />
      <label>
        Number of Doctors:
        <input 
          type="number"
          name="doctorsCount"
          value={hospitalData.doctorsCount}
          onChange={handleDoctorCountChange}
        />
      </label>
      <br />
      {hospitalData.doctors.map((doctor, index) => (
        <div key={index}>
          <h3>Doctor {index + 1}</h3>
          <label>
            Name:
            <input 
              type="text"
              name="name"
              value={doctor.name}
              onChange={(e) => handleDoctorChange(index, e)}
            />
          </label>
          <br />
          <label>
            Specialization:
            <input 
              type="text"
              name="specialization"
              value={doctor.specialization}
              onChange={(e) => handleDoctorChange(index, e)}
            />
          </label>
          <br />
        </div>
      ))}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
