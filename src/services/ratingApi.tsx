
import { supabase } from '../config/supaBaseConfig';
import { DoctorModel } from '../models/doctor';
import { RatingModel } from '../models/rating';


// Fetch Data
export const submitRating = async (doctorId:number,hospitalId:number,surgeryId:number,
  rating:number,review:string):Promise<any> => {
  const userId = 'sagar';  // Replace with current user ID

  const { data, error } = await supabase
    .from('ratings')
    .insert([
      { user_id: userId, d_id: doctorId, h_id: hospitalId, s_id: surgeryId,rating: rating, review: review }
    ]);

  if (error) {
    console.log('Error submitting rating:', error);
    return;
  }

  console.log('Rating submitted successfully:', data);
};
export const submitRating1 = async (): Promise<any> => {  
  const { data, error } = await supabase
      .from('surgery')
      .select('*');
if (error) {
  throw new Error(error.message);
}
return data;
};