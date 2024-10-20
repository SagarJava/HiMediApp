
import { fetchDoctor } from './doctorApi';
import { fetchHoisptal } from './hospitalApi';
import { fetchSurgery } from './surgeryApi';


// Fetch Data
export const fetchSearchHoisptals = async (): Promise<any> => {  
  let hospitalData=fetchHoisptal();
  const transformedHospitals = (await hospitalData).map(hospital => ({
    id: hospital.hospital_id,
    name: hospital.hospital_name,
    href: "/hospital",
    serviceName: "hospital"
  }));
  return transformedHospitals || [];
};
export const fetchSearchDoctors = async ()=> {  
  let doctorData=fetchDoctor();
  const transformedDoctors = (await doctorData).map(doctor => ({
    id: doctor.doctor_id,
    name: doctor.doctor_name,
    href: "/doctor",
    serviceName: "doctor"
  }));
  return transformedDoctors || [];
};
export const fetchSearchSurgerys = async ()=> {  
  let surgeryData=fetchSurgery();
  const transformedSurgerys = (await surgeryData).map(surgery => ({
    id: surgery.surgery_id,
    name: surgery.surgery_name,
    href: "/surgery",
    serviceName: "surgery"
  }));
  return transformedSurgerys || [];
};