
import { supabase } from '../config/supaBaseConfig';

// Fetch Data
export const fetchDoctorBySurgeryId = async (id:Number): Promise<any> => {  
 
const { data, error } = await supabase
.from('doctor_surgery')
.select(`
  surgery (
    surgery_id,
    surgery_name,
    surgery_description,
    surgery_time_taken,
    benefits,
    procedureSteps,
    risks
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
.eq('surgery_id', id);
if (error) {
console.error('Error fetching surgery and doctor details:', error);
} else {
// Step 2: Process the data to combine doctors into an array under each hospital
const surgeryMap:any = {};
data.forEach((entry:any) => {
  const surgeryId = entry.surgery.surgery_id;
  if (!surgeryMap[surgeryId]) {
    surgeryMap[surgeryId] = {
      ...entry.surgery,
      doctors: []
    };
  }
  surgeryMap[surgeryId].doctors.push(entry.doctors);
});
const result = Object.values(surgeryMap);
console.log('surgery with doctors:', result);
return result;
}
};

