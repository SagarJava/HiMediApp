import { DoctorModel } from "./doctor";

export interface DoctorSurgeryModel {
  surgery_id: number;
  surgery_name: string;
  surgery_procedure: string;
  surgery_description: string;
  surgery_time_taken: number;
  benefits: string;
  procedureSteps: string;
  risks: string;
    doctors:DoctorModel[]   
  }
  