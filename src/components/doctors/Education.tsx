
import React from 'react';
import './Education.css';
import { IonBreadcrumb } from '@ionic/react';

interface EducationProps {
  education?: string;
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
   <IonBreadcrumb>
    
    <div className="education">
      <h2 className="background-header">Education & Certifications</h2>
  <p>{education}</p>
</div>
</IonBreadcrumb>
  );
};

export default Education;
