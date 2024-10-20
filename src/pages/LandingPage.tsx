import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  // IonButton,
} from "@ionic/react";  
import { Swiper, SwiperSlide } from 'swiper/react';
import Login from './Login';
import { useHistory } from 'react-router-dom';
import InsuranceForm from '../forms/insuranceForm';
import NeutrisionForm from '../forms/neutrisionForm';
import PrescriptionForm from '../forms/prescriptionForm';
import BloodDonationForm from '../forms/bloodDonationForm';
import HomeSlider from '../components/home/HomeSlider';
import Carousel from '../components/home/IconListComponent';
import HomeSlider1 from '../components/home/HomeSlider1';

const LandingPage: React.FC = () => {
  const slides = [
    {
      text: "1 Crore Indians connect with doctor every year on Practo",
    },
    {
      text: "Get instant appointment with top doctors in your area",
    },
    {
      text: "Consult with doctors from the comfort of your home",
    }
  ];
  const history = useHistory();
  return (
    <HomeSlider1></HomeSlider1>
  );
};

export default LandingPage;