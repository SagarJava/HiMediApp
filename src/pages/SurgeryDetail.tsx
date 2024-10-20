import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SurgeryOverview from '../components/surgery/SurgeryOverview';
import SurgeryBenefits from '../components/surgery/SurgeryBenefits';
import SurgeryProcedure from '../components/surgery/SurgeryProcedure';
import SurgeryRisks from '../components/surgery/SurgeryRisks';
import DoctorsList from '../components/surgery/DoctorsList';
import { fetchDoctorBySurgeryId } from '../services/doctorSurgeryApi';
import { useParams } from 'react-router';
import { DoctorModel } from '../models/doctor';
import { DoctorSurgeryModel } from '../models/doctorSurgery';
import { SurgeryModel } from '../models/surgery';
import SurgeryPricing from '../components/surgery/SurgeryPricing';
import { PricingModel } from '../models/pricing';
import { fetchPricingBySurgeryId } from '../services/pricingSurgeryApi';
import { PricingSurgeryModel } from '../models/surgeryPricing';

const SurgeryDetail: React.FC = () => {
  // const [doctorsurgery, setDoctorSurgery] = useState<DoctorSurgeryModel | undefined>(undefined);
  const [surgery, setSurgery] = useState<DoctorSurgeryModel | undefined>(undefined);
  const [doctors, setDoctors] = useState<DoctorModel[] | undefined>(undefined);
  const [benefits, setBenefits] = useState<string| undefined>(undefined);
  const [risks, setRisks] = useState<string| undefined>(undefined);
  const [procedureSteps, setProcedureSteps] = useState<string| undefined>(undefined);
  const [pricing, setPricing] = useState<PricingModel[] | undefined>(undefined);
  const {id}:any = useParams();
  useEffect(()=>{
    const getDoctorsSurgeryData=async ()=>{
      let surgeryDoctorApiData:DoctorSurgeryModel[]=await fetchDoctorBySurgeryId(id);
      let surgeryPricingApiData:PricingSurgeryModel[]=await fetchPricingBySurgeryId(id);
      if(surgeryDoctorApiData.length){
        setSurgery(surgeryDoctorApiData[0]);
        setDoctors(surgeryDoctorApiData[0].doctors);
        setProcedureSteps(surgeryDoctorApiData[0].procedureSteps);
        setBenefits(surgeryDoctorApiData[0].benefits);
        setRisks(surgeryDoctorApiData[0].risks);
        setPricing(surgeryPricingApiData[0].pricing);
      }
    }
    getDoctorsSurgeryData()
    },[]);
    
  
  
  return (
    <IonPage  style={{marginTop: "36px"}}>
      <IonContent>
        <SurgeryOverview surgeryData={surgery}/>
        <SurgeryPricing pricing={pricing}/>
        <SurgeryBenefits benefits={benefits} />
        <SurgeryProcedure steps={procedureSteps} />
        <SurgeryRisks risks={risks} /> 
        <DoctorsList doctors={doctors} />
      </IonContent>
    </IonPage>
  );
};

export default SurgeryDetail;