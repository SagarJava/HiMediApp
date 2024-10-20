import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import DepartmentOverview from '../components/departments/DepartmentOverview';
import ConditionsTreated from '../components/departments/ConditionsTreated';
import TreatmentsOffered from '../components/departments/TreatmentsOffered';
import DepartmentDoctorsList from '../components/departments/DepartmentDoctorList';
import FAQs from '../components/departments/DepartmentFAQs';

const DepartmentDetail: React.FC = () => {
  const overview = {
    title: 'Cardiology',
    description:
      'Cardiology is a branch of medicine that deals with disorders of the heart as well as parts of the circulatory system. This department is dedicated to the diagnosis and treatment of heart conditions.',
    image: '/assets/cardiology.jpg',
  };

  const conditions = [
    'Coronary Artery Disease',
    'Heart Failure',
    'Arrhythmias',
    'Congenital Heart Defects',
    'Hypertension',
  ];

  const treatments = [
    'Angioplasty',
    'Heart Bypass Surgery',
    'Pacemaker Implantation',
    'Cardiac Rehabilitation',
    'Heart Transplantation',
  ];

  const doctors = [
    {
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      image: '/assets/doctor-john.jpg',
    },
    {
      name: 'Dr. Jane Smith',
      specialty: 'Interventional Cardiologist',
      image: '/assets/doctor-jane.jpg',
    },
    // Add more doctors as needed...
  ];

  const faqs = [
    {
      question: 'What is cardiology?',
      answer: 'Cardiology is a medical specialty that focuses on diagnosing and treating heart-related conditions.',
    },
    {
      question: 'What conditions do cardiologists treat?',
      answer: 'Cardiologists treat conditions like coronary artery disease, heart failure, arrhythmias, and more.',
    },
    // Add more FAQs as needed...
  ];

  return (
    <IonPage  style={{marginTop: "36px"}}>
      <IonContent>
        <DepartmentOverview title={overview.title} description={overview.description} image={overview.image} />
        <ConditionsTreated conditions={conditions} />
        <TreatmentsOffered treatments={treatments} />
        <DepartmentDoctorsList doctors={doctors} />
        <FAQs faqs={faqs} />
      </IonContent>
    </IonPage>
  );
};

export default DepartmentDetail;
