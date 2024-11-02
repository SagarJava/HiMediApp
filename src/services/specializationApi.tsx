
import { supabase } from '../config/supaBaseConfig';
import { SpecializationModel } from '../models/specialization';


// Fetch Data
export const fetchSpecialization = async (): Promise<SpecializationModel[]> => {  
    const { data, error } = await supabase
        .from('specialization')
        .select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data || [];
};
// Insert Data
export const addSpecialization = async (insert: Partial<SpecializationModel>): Promise<SpecializationModel> => {
    const { data, error } = await supabase
      .from('specialization')
      .insert(insert)
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data as SpecializationModel;
  };
  
  // Update Data
  export const updateSpecialization = async (id: number, updates: Partial<SpecializationModel>): Promise<SpecializationModel> => {
    const { data, error } = await supabase
      .from('specialization')
      .update(updates)
      .eq('id', id)
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data as SpecializationModel;
  };
  
  // Delete Data
  export const deleteSpecialization = async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('specialization')
      .delete()
      .eq('id', id);
  
    if (error) {
      throw new Error(error.message);
    }
  };
 // Fetch Data by ID
export const fetchSpecializationById = async (id:number): Promise<SpecializationModel> => {  
  const { data, error } = await supabase
      .from('specialization')
      .select('*')
      .eq('id', id)
      .single();
if (error) {
  throw new Error(error.message);
}
return data || {};
};