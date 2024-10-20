
import React from 'react';
import './AssociatedDoctors.css';
import { DoctorModel } from '../../models/doctor';
import { IonImg } from '@ionic/react';


interface AssociatedDoctorsProps {
  doctors?: DoctorModel[];
}

const AssociatedDoctors: React.FC<AssociatedDoctorsProps> = ({ doctors }) => {
  return (
    <div className="associated-doctors">
      <h2 className="background-header">Associated Doctors</h2>
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

export default AssociatedDoctors;
