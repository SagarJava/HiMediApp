
import { supabase } from '../config/supaBaseConfig';
import { DoctorModel } from '../models/doctor';
import { DoctorRatingModel } from '../models/rating';


// Fetch Data
// Insert Data
export const addDoctorRating= async (insert: Partial<DoctorRatingModel>): Promise<DoctorRatingModel> => {
  const { data, error } = await supabase
    .from('doctor-rating')
    .insert(insert)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as DoctorRatingModel;
};
export const fetchDoctorRatings = async (doctorid: number) => {
  const { data, error } = await supabase
    .from('doctor-rating')
    .select('rating')
    .eq('doctorid', doctorid);

  if (error) throw error;

  // Calculate average rating
  const totalRatings = data.reduce((acc, { rating }) => acc + rating, 0);
  const averageRating = data.length > 0 ? totalRatings / data.length : 0;

  return averageRating;
};