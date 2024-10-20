
import React from 'react';
import './Experience.css';
import { IonBreadcrumb } from '@ionic/react';

interface ExperienceProps {
  experience?: string;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
  
     <IonBreadcrumb >
     <div className="experience">
     <h2 className="background-header">Experience</h2>
   <p>{experience}</p>
 </div>
 </IonBreadcrumb>
  );
};

export default Experience;
