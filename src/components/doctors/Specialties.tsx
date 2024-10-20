
import React from 'react';
import './Specialties.css';
import { IonBreadcrumb } from '@ionic/react';

interface SpecialtiesProps {
  specialties?: string;
}

const Specialties: React.FC<SpecialtiesProps> = ({ specialties }) => {
  return (
  
     <IonBreadcrumb >
     <div className="specialties">
   <h2 className="background-header">Specialties</h2>
   <p>{specialties}</p>
 </div>
     </IonBreadcrumb>
  );
};

export default Specialties;
