import React from 'react';
import './SurgeryRisks.css';
import { IonBreadcrumb } from '@ionic/react';
interface SurgeryRisksProps {
  risks?: string;
}

const SurgeryRisks: React.FC<SurgeryRisksProps> = ({ risks }) => {
  return (
    <IonBreadcrumb >
   <div className="surgery-risks">
   <h2 className='background-header'>Associated Risks</h2>
  <p>{risks}</p>
</div>
</IonBreadcrumb>
  );
};

export default SurgeryRisks;
