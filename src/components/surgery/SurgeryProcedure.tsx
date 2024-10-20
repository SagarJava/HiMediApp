import React from 'react';
import './SurgeryProcedure.css';
import { IonBreadcrumb } from '@ionic/react';
import './SurgeryBenefits.css';
interface SurgeryProcedureProps {
  steps?: string;
}

const SurgeryProcedure: React.FC<SurgeryProcedureProps> = ({ steps }) => {
  return (
  
     <IonBreadcrumb >
      <div className="surgery-procedure">
      <h2 className='background-header'>Surgery Procedure</h2>
    <p>{steps}</p>
  </div>
  </IonBreadcrumb>
  );
};

export default SurgeryProcedure;
