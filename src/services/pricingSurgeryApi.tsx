
import { supabase } from '../config/supaBaseConfig';

// Fetch Data
export const fetchPricingBySurgeryId = async (id:Number): Promise<any> => {  
 
const { data, error } = await supabase
.from('surgery_pricing')
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
  pricing (
    pricing_id,
    pricing_name,
    pricing_description
  )
`)
.eq('surgery_id', id);
if (error) {
console.error('Error fetching surgery and pricing details:', error);
} else {
// Step 2: Process the data to combine doctors into an array under each hospital
const surgeryMap:any = {};
data.forEach((entry:any) => {
  const surgeryId = entry.surgery.surgery_id;
  if (!surgeryMap[surgeryId]) {
    surgeryMap[surgeryId] = {
      ...entry.surgery,
      pricing: []
    };
  }
  surgeryMap[surgeryId].pricing.push(entry.pricing);
});
const result = Object.values(surgeryMap);
console.log('surgery with pricing:', result);
return result;
}
};

