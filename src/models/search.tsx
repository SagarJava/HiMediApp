import { DoctorModel } from "./doctor";
import { HospitalsModel } from "./hospital";
import { PricingModel } from "./pricing";
import { SpecializationModel } from "./specialization";
import { SurgeryModel } from "./surgery";

export interface SearchModel {
    id: number;
    name: string;
    href: string;
    serviceName: string;
  }

export interface SearchQueryModel {
    rating: RangeModel;
    location: string;
    specialization: string;
    price: RangeModel;
    hospitalType: HospitalType;
    insurance: string;
    sortBy:SortType
}  
export interface RangeModel {  
  minimum: number;
  maximum: number;
} 
enum HospitalType {
  LOW,
  MID,
  HIGH,
}
enum SortType {
  ASC,
  DESC
}

export interface SearchApiModel {
  hospitals:HospitalsModel[];
  doctors: DoctorModel[];
  surgeries: SurgeryModel[];
  specialization: SpecializationModel[];
  pricing: PricingModel[];
}