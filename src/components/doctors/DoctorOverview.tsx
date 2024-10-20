
import React from 'react';
import './DoctorOverview.css';
import { DoctorModel } from '../../models/doctor';
import { IonContent, IonImg } from '@ionic/react';

interface DoctorOverviewProps {
  doctorData?: DoctorModel;
}

const DoctorOverview: React.FC<DoctorOverviewProps> = ({doctorData}) => {
  return (
    // <IonContent>
    
    <div className="doctor-overview">
    <IonImg src={doctorData?.image} alt="Example image" />
     <div className="doctor-info">
        <h1 className="background-header">{doctorData?.doctor_name}</h1>
        <h3>{doctorData?.doctor_specialization}</h3>
        <p>{doctorData?.doctor_description}</p>
      </div>  
    </div>
  // </IonContent>
    
  );
};

export default DoctorOverview;
