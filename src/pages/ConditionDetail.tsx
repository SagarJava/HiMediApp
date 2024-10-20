
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ConditionOverview from '../components/conditions/ConditionOverview';
import Symptoms from '../components/conditions/Symptoms';
import Causes from '../components/conditions/Causes';
import Diagnosis from '../components/conditions/Diagnosis';
import TreatmentOptions from '../components/conditions/TreatmentOptions';
import FAQs from '../components/conditions/FAQs';

const ConditionDetail: React.FC = () => {
  const overview = {
    title: 'Heart Attack',
    description: 'A heart attack occurs when the flow of blood to the heart is blocked, most often by a buildup of fat, cholesterol, and other substances.',
    image: '/assets/heart-attack.jpg',
  };

  const symptoms = [
    'Chest pain or discomfort',
    'Shortness of breath',
    'Nausea, vomiting, lightheadedness',
    'Cold sweat',
    'Fatigue',
  ];

  const causes = [
    'Coronary artery disease',
    'Spasm of a coronary artery',
    'A tear in the coronary artery',
    'Drug misuse',
    'Stress',
  ];

  const diagnosis = [
    'Electrocardiogram (ECG)',
    'Blood tests',
    'Coronary angiography',
    'Echocardiogram',
    'Cardiac CT or MRI',
  ];

  const treatments = [
    'Medication to dissolve blood clots',
    'Coronary angioplasty and stenting',
    'Coronary artery bypass surgery',
    'Lifestyle changes',
    'Cardiac rehabilitation',
  ];

  const faqs = [
    {
      question: 'What is a heart attack?',
      answer: 'A heart attack is a medical emergency that occurs when blood flow to the heart is blocked.',
    },
    {
      question: 'What are the common symptoms of a heart attack?',
      answer: 'Common symptoms include chest pain, shortness of breath, and cold sweat.',
    },
    // Add more FAQs as needed...
  ];

  return (
    <IonPage  style={{marginTop: "36px"}}>
      <IonContent>
        <ConditionOverview title={overview.title} description={overview.description} image={overview.image} />
        <Symptoms symptoms={symptoms} />
        <Causes causes={causes} />
        <Diagnosis diagnosis={diagnosis} />
        <TreatmentOptions treatments={treatments} />
        <FAQs faqs={faqs} />
      </IonContent>
    </IonPage>
  );
};

export default ConditionDetail;
