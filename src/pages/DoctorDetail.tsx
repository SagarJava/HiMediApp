
import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import DoctorOverview from '../components/doctors/DoctorOverview';
import Specialties from '../components/doctors/Specialties';
import Experience from '../components/doctors/Experience';
import Education from '../components/doctors/Education';
import FAQs from '../components/doctors/FAQs';
import { useParams } from 'react-router';
import { DoctorModel } from '../models/doctor';
import { fetchDoctorById } from '../services/doctorApi';
import InsuranceForm from '../forms/insuranceForm';
import PrescriptionForm from '../forms/prescriptionForm';
import NeutrisionForm from '../forms/neutrisionForm';

const DoctorDetail: React.FC = () => {
  const [doctorData, setDoctor] = useState<DoctorModel | undefined>(undefined);
  const [specialties, setSpecialties] = useState<string| undefined>(undefined);
  const [experience, setExperience] = useState<string| undefined>(undefined);
  const [education, setEducation] = useState<string| undefined>(undefined);
  const {id}:any = useParams();
  useEffect(()=>{
const getDoctorsData=async()=>{
  let doctorApiData:DoctorModel=await fetchDoctorById(id);
  if(doctorApiData!=null){
    setDoctor(doctorApiData);
    setSpecialties(doctorApiData.doctor_specialization);
    setExperience(doctorApiData.experience);
    setEducation(doctorApiData.education);
  }
}
getDoctorsData();
  },[])

  const faqs = [
    {
      question: `What are Dr. Ajay Mittal's specialties?`,
      answer: 'Dr. Ajay Mittal specializes in Cardiovascular Surgery, Cardiac Electrophysiology, and Heart Transplantation.',
    },
    {
      question: 'Where does Dr. Ajay Mittal practice?',
      answer: 'Dr. Ajay Mittal practices at Max Super Speciality Hospital, Delhi.',
    },
    // Add more FAQs as needed...
  ];

  return (
    <IonPage  style={{marginTop: "36px"}}>
      <IonContent>
        <DoctorOverview doctorData={doctorData} />
        <Specialties specialties={specialties} />
        <Experience experience={experience} />
        <Education education={education} />
        <FAQs faqs={faqs} />
      </IonContent>
    </IonPage>
  );
};

export default DoctorDetail;
