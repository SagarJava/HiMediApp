
import React, { useEffect, useState } from 'react';
import './HospitalOverview.css';
import { HospitalModel } from '../../models/hospital';
import { IonImg } from '@ionic/react';

interface HospitalOverviewProps {
  hospitalsData?: HospitalModel;
}

// const HospitalOverview: React.FC<HospitalOverviewProps> = ({ name, description, image }) => {
  const HospitalOverview: React.FC<HospitalOverviewProps> = ({hospitalsData}) => {

  return (
    <div className="hospital-overview">
      <IonImg src={hospitalsData?.image} alt="Example image" />
      <div className="hospital-info">
        <h1 className="background-header">{hospitalsData?.hospital_name}</h1>
        <p>{hospitalsData?.hospital_description}</p>
      </div>
    </div>
  );
};

export default HospitalOverview;

