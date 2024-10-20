import React from 'react';
import './DoctorsList.css';
import { DoctorModel } from '../../models/doctor';
import { IonImg } from '@ionic/react';


interface DoctorsListProps {
  doctors?: DoctorModel[];
}

const DoctorsList: React.FC<DoctorsListProps> = ({ doctors }) => {
  return (
    <div className="doctors-list">
      <h2 className="background-header">Doctors Associated with the Surgery</h2>
      <div className="doctors-grid">
        {doctors?.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <IonImg src={doctor.image} alt="Example image" />
            <h3>{doctor.doctor_name}</h3>
            <p>{doctor.doctor_specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
