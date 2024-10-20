
import { supabase } from '../config/supaBaseConfig';
import { Country } from '../models/country';
import { HospitalModel } from '../models/hospital';


// Fetch Data
export const fetchHoisptal = async (): Promise<HospitalModel[]> => {  
    const { data, error } = await supabase
        .from('hospitals')
        .select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data || [];
};
// Fetch Data
export const fetchHoisptalById = async (id: number): Promise<HospitalModel> => {  
    const { data, error } = await supabase
        .from('hospitals')
        .select('*')
        .eq('hospital_id', id)
      .single();
  if (error) {
    throw new Error(error.message);
  }
  return data || {};
};
// Insert Data
export const addHoisptal = async (insert: Partial<HospitalModel>): Promise<HospitalModel[]> => {
    const { data, error } = await supabase
      .from('hospitals')
      .insert(insert)
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data as HospitalModel[];
  };
  
  // Update Data
  export const updateHoisptal = async (id: number, updates: Partial<HospitalModel>): Promise<HospitalModel> => {
    const { data, error } = await supabase
      .from('hospitals')
      .update(updates)
      .eq('id', id)
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data as HospitalModel;
  };
  
  // Delete Data
  export const deleteHoisptal = async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('hospitals')
      .delete()
      .eq('id', id);
  
    if (error) {
      throw new Error(error.message);
    }
  };
  // Fetch Data
export const fetchCountry = async (): Promise<Country[]> => {  
    const { data, error } = await supabase
        .from('countries')
        .select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data || [];
};