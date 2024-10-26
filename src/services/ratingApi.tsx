
import { supabase } from '../config/supaBaseConfig';
import { DoctorModel } from '../models/doctor';
import { DoctorRatingModel } from '../models/rating';


// Fetch Data
// Insert Data
export const addDoctorRating= async (insert: Partial<DoctorRatingModel>): Promise<DoctorRatingModel> => {
  const { data, error } = await supabase
    .from('doctor_rating')
    .insert(insert)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as DoctorRatingModel;
};