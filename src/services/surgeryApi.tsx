
import { supabase } from '../config/supaBaseConfig';
import { SurgeryModel } from '../models/surgery';


// Fetch Data
export const fetchSurgery = async (): Promise<SurgeryModel[]> => {  
    const { data, error } = await supabase
        .from('surgery')
        .select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data || [];
};
// Insert Data
export const addSurgery = async (insert: Partial<SurgeryModel>): Promise<SurgeryModel> => {
    const { data, error } = await supabase
      .from('surgery')
      .insert(insert)
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data as SurgeryModel;
  };
  
  // Update Data
  export const updateSurgery = async (id: number, updates: Partial<SurgeryModel>): Promise<SurgeryModel> => {
    const { data, error } = await supabase
      .from('surgery')
      .update(updates)
      .eq('id', id)
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data as SurgeryModel;
  };
  
  // Delete Data
  export const deleteSurgery = async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('surgery')
      .delete()
      .eq('id', id);  
    if (error) {
      throw new Error(error.message);
    }
  };