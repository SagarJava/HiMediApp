import React from 'react';
import './DepartmentDoctorList.css';

interface Doctor {
  name: string;
  specialty: string;
  image: string;
}

interface DepartmentDoctorsListProps {
  doctors: Doctor[];
}

const DepartmentDoctorsList: React.FC<DepartmentDoctorsListProps> = ({ doctors }) => {
  return (
    <div className="department-doctors-list">
      <h2>Doctors in this Department</h2>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentDoctorsList;
