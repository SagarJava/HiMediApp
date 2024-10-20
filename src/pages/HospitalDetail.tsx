
import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import HospitalOverview from '../components/hospitals/HospitalOverview';
import Specialties from '../components/hospitals/Specialties';
import Facilities from '../components/hospitals/Facilities';
import Address from '../components/hospitals/Address';
import AssociatedDoctors from '../components/hospitals/AssociatedDoctors';
import { HospitalModel } from '../models/hospital';
import { fetchHoisptalById } from '../services/hospitalApi';
import { fetchHospitalDoctorById } from '../services/hospitalDoctorApi';
import { DoctorModel } from '../models/doctor';
import { useParams } from 'react-router';

const HospitalDetail: React.FC = () => {
  const [hospitalsData, setHospital] = useState<HospitalModel | undefined>(undefined);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [doctors, setDoctors] = useState<DoctorModel[] | undefined>(undefined);
  const [specialties, setSpecialization] = useState<string[] | undefined>(undefined);
  const [facilities, setFacilities] = useState<string| undefined>(undefined);
  const {id}:any = useParams();
  useEffect(() => {
    const getData = async () => {
      let hospitalApiData:HospitalModel[] = await fetchHospitalDoctorById(id);      
      if(hospitalApiData.length)
      setHospital(hospitalApiData[0]);
      setAddress(hospitalApiData[0].hospital_address);
      setDoctors(hospitalApiData[0].doctors);
      setSpecialization(hospitalApiData[0].doctors.map(item=>item.doctor_specialization));
      setFacilities(hospitalApiData[0].facilities);
    }
    getData();
  },[]  
  );
  return (    
    <IonPage  style={{marginTop: "36px"}}>
      <IonContent>
        <HospitalOverview hospitalsData={hospitalsData}/>
        <Specialties specialties={specialties} />
        <Facilities facilities={facilities} />
        <Address address={address} />
        <AssociatedDoctors doctors={doctors} />
      </IonContent>
    </IonPage>
  );
};

export default HospitalDetail;
