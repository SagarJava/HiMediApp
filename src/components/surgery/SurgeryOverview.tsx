import React from 'react';
import './SurgeryOverview.css';
import { SurgeryModel } from '../../models/surgery';
import { DoctorSurgeryModel } from '../../models/doctorSurgery';

interface SurgeryOverviewProps {
  surgeryData?:DoctorSurgeryModel;
}

const SurgeryOverview: React.FC<SurgeryOverviewProps> = ({ surgeryData }) => {
  return (
    <div className="surgery-overview">
      {/* <img src={image} alt={title} className="surgery-image" /> */}
      <div className="surgery-info">
        <h1 className="background-header">{surgeryData?.surgery_name}</h1>
        <p>{surgeryData?.surgery_description}</p>
      </div>
    </div>
  );
};

export default SurgeryOverview;
