
import { supabase } from '../config/supaBaseConfig';
import { DoctorModel } from '../models/doctor';


// Fetch Data
export const fetchDoctor = async (): Promise<DoctorModel[]> => {  
    const { data, error } = await supabase
        .from('doctors')
        .select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data || [];
};
// Insert Data
export const addDoctor = async (insert: Partial<DoctorModel>): Promise<DoctorModel> => {
    const { data, error } = await supabase
      .from('doctors')
      .insert(insert)
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data as DoctorModel;
  };
  
  // Update Data
  export const updateDoctor = async (id: number, updates: Partial<DoctorModel>): Promise<DoctorModel> => {
    const { data, error } = await supabase
      .from('doctors')
      .update(updates)
      .eq('id', id)
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data as DoctorModel;
  };
  
  // Delete Data
  export const deleteHoisptal = async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('doctors')
      .delete()
      .eq('id', id);
  
    if (error) {
      throw new Error(error.message);
    }
  };
 // Fetch Data by ID
export const fetchDoctorById = async (id:number): Promise<DoctorModel> => {  
  const { data, error } = await supabase
      .from('doctors')
      .select('*')
      .eq('doctor_id', id)
      .single();
if (error) {
  throw new Error(error.message);
}
return data || {};
};