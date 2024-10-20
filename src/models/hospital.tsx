import { DoctorModel } from "./doctor";

export interface HospitalModel {
    hospital_id: number;
    hospital_name: string;
    hospital_address: string;
    hospital_description: string;
    hospital_contact: number;
    facilities: string;
    image: string;
    doctors: DoctorModel[];
  }
  