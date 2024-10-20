
import { supabase } from '../config/supaBaseConfig';
import { Country } from '../models/country';
import { HospitalModel } from '../models/hospital';

interface HospitalDoctorModel {
  hospital_name: string;
  doctor_name: string;
  doctor_description: string;
  doctor_specialization: string;
}
// Fetch Data
export const fetchHospitalDoctorById = async (id:Number): Promise<any> => {  
 
const { data, error } = await supabase
.from('hospital_doctor')
.select(`
  hospitals (
    hospital_id,
    hospital_name,
    hospital_address,
    hospital_description,
    hospital_contact,
    facilities,
    image
  ),
  doctors (
    doctor_id,
    doctor_name,
    doctor_specialization,
    doctor_description,
    doctor_experience,
    education,
    image,
    specialties,
    experience
  )
`)
.eq('hospital_id', id);
if (error) {
console.error('Error fetching hospital and doctor details:', error);
} else {
// Step 2: Process the data to combine doctors into an array under each hospital
const hospitalMap:any = {};
data.forEach((entry:any) => {
  const hospitalId = entry.hospitals.hospital_id;
  if (!hospitalMap[hospitalId]) {
    hospitalMap[hospitalId] = {
      ...entry.hospitals,
      doctors: []
    };
  }
  hospitalMap[hospitalId].doctors.push(entry.doctors);
});
const result = Object.values(hospitalMap);
console.log('Hospital with doctors:', result);
return result;
}
};

