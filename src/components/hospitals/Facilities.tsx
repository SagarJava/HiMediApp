
import React from 'react';
import './Facilities.css';
import { IonBreadcrumb } from '@ionic/react';

interface FacilitiesProps {
  facilities?: string;
}

const Facilities: React.FC<FacilitiesProps> = ({ facilities }) => {
  return (
    <IonBreadcrumb >
        <div className="address">
      <h2 className="background-header">Facilities</h2>
      <p>{facilities}</p>
    </div>
    </IonBreadcrumb>
  );
};

export default Facilities;
