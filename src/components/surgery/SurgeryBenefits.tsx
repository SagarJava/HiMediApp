import React from 'react';
import './SurgeryBenefits.css';
import { IonBreadcrumb } from '@ionic/react';

interface SurgeryBenefitsProps {
  benefits?: string;
}

const SurgeryBenefits: React.FC<SurgeryBenefitsProps> = ({ benefits }) => {
  return (
    
    <IonBreadcrumb >
    <div className="surgery-benefits">
    <h2 className="background-header"> Benefits of the Surgery</h2>
  <p>{benefits}</p>
</div>
</IonBreadcrumb>
  );
};

export default SurgeryBenefits;
