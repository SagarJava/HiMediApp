
import { supabase } from '../config/supaBaseConfig';
import { RangeModel, SearchQueryModel } from '../models/search';
import { fetchDoctor } from './doctorApi';
import { fetchHoisptal } from './hospitalApi';
import { fetchSpecialization } from './specializationApi';
import { fetchSurgery } from './surgeryApi';


// Fetch Data
export const fetchSearchHoisptals = async (): Promise<any> => {  
  let hospitalData=fetchHoisptal();
  const transformedHospitals = (await hospitalData).map(hospital => ({
    id: hospital.hospital_id,
    name: hospital.hospital_name,
    href: "/hospital",
    serviceName: "hospital"
  }));
  return transformedHospitals || [];
};
export const fetchSearchDoctors = async ()=> {  
  let doctorData=fetchDoctor();
  const transformedDoctors = (await doctorData).map(doctor => ({
    id: doctor.doctor_id,
    name: doctor.doctor_name,
    href: "/doctor",
    serviceName: "doctor"
  }));
  return transformedDoctors || [];
};
export const fetchSearchSurgerys = async ()=> {  
  let surgeryData=fetchSurgery();
  const transformedSurgerys = (await surgeryData).map(surgery => ({
    id: surgery.surgery_id,
    name: surgery.surgery_name,
    href: "/surgery",
    serviceName: "surgery"
  }));
  return transformedSurgerys || [];
};
export const fetchSearchSpecializations = async ()=> {  
  let specializationData=fetchSpecialization();
  const transformedspecializations = (await specializationData).map(specialization => ({
    id: specialization.id,
    name: specialization.name,
    href: "/specialization",
    serviceName: "specialization"
  }));
  return transformedspecializations || [];
};
// Fetch Data
// export const advanceSearch = async (searchParams: Partial<SearchQueryModel>): Promise<any> => {  
//   const { location, specialization, hospitalType,insurance,sortBy} = searchParams;
//   const rating: RangeModel | undefined = searchParams.rating;
//   const price: RangeModel | undefined = searchParams.price;
//   let minRating ;
//   let maxRating;
//   let minPrice;
//   let maxPrice;
//   if (rating && price) {
//     minRating = rating.minimum;
//     maxRating = rating.maximum;
//     minPrice = price.minimum;
//     maxPrice = price.maximum;
//   }
//   // let query = supabase.from('specialization').select('*');
//   // // Filter by status (enum type)
//   // if (specialization) {
//   //   query = query.eq('specialization', specialization);
//   // }
//   // if (insurance) {
//   //   query = query.eq('insurance', insurance);
//   // }
//   // // Sorting by column
//   // // if (sortBy) {
//   // //   query = query.order(sortBy, { ascending: sortBy === 'asc' });
//   // // }
 
//   const { data, error } = await supabase
//     .from('hospital_doctor_surgery_specialization_pricing')
//     .select(`
//     hospital_id,
//     surgery_id,
//     doctor_id,

//    hospitals (
//     hospital_id,
//     hospital_name,
//     hospital_address,
//     hospital_description,
//     hospital_contact,
//     facilities,
//     image
//   ),
//   surgery (
//     surgery_id,
//     surgery_name,
//     surgery_description,
//     surgery_time_taken,
//     benefits,
//     procedureSteps,
//     risks
//   ),
//   doctors (
//     doctor_id,
//     doctor_name,
//     doctor_specialization,
//     doctor_description,
//     doctor_experience,
//     education,
//     image,
//     specialties,
//     experience
//   ),
//   specialization (
//     id,
//     name,
//     description
//   ),
//   pricing (
//     id,
//     cost,
//     desc
//   )
//     `)
//     // .eq('hospital_doctor_surgery_specialization_pricing.hospital_id', 'hospitals.hospital_id')
//     // .eq('hospital_doctor_surgery_specialization_pricing.doctor_id', 'doctors.doctor_id')
//     // .eq('hospital_doctor_surgery_specialization_pricing.surgery_id', 'surgery.surgery_id')
//     // .eq('hospital_doctor_surgery_specialization_pricing.specialization_id', 'specialization.specialization_id')
//     // .eq('hospital_doctor_surgery_specialization_pricing.pricing_id', 'pricing.pricing_id')
//     .gte('pricing.cost', minPrice || 100)  // Default minPrice to 100 if undefined
//     .lte('pricing.cost', maxPrice || 100000);  

//   if (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
//   console.log('Search Data ---> ',data);
//   return data;
//   }
  
export const advanceSearch = async (
  searchParams: Partial<SearchQueryModel>,
  signal: AbortSignal
): Promise<any> => {
  try {
    const { location, specialization, hospitalType, insurance, sortBy } = searchParams;
    const rating: RangeModel | undefined = searchParams.rating;
    const price: RangeModel | undefined = searchParams.price;
    const minRating = rating?.minimum;
    const maxRating = rating?.maximum;
    const minPrice = price?.minimum;
    const maxPrice = price?.maximum;
    console.log('searchParams ---> ', searchParams);
    const { data, error } = await supabase
      .from('hospital_doctor_surgery_specialization_pricing')
      .select(`
        hospitals (hospital_id, hospital_name, hospital_address, hospital_description, hospital_contact, facilities, image),
        surgery (surgery_id, surgery_name, surgery_description, surgery_time_taken, benefits, procedureSteps, risks),
        doctors (doctor_id, doctor_name, doctor_specialization, doctor_description, doctor_experience, education, image, specialties, experience),
        specialization (id, name, description),
        pricing (id, cost, desc)
      `)
      .eq('specialization.name', specialization)
      .gte('pricing.cost', minPrice)
      .lte('pricing.cost', maxPrice)
      .abortSignal(signal); // Attach the abort signal

    if (error) {
      console.error("Error fetching data:", error);
      return [];
    }

    console.log('Search Data ---> ', data);
     // Step 2: Process and organize data by hospitals
     const hospitalsMap: { [key: string]: any } = {};
    //  const hospitalMap:any = {};
     data?.forEach((entry) => {
       const hospitalId = entry.hospitals.hospital_id; 
       // Initialize the hospital object if not already in map
       if (!hospitalsMap[hospitalId]) {
         hospitalsMap[hospitalId] = {
           hospitals:[],
           doctors: [],
           surgeries: [],
           specializations: [],
           pricing: [],
         };
       }
 
       // Add related data to corresponding arrays
       if (entry.hospitals) hospitalsMap[hospitalId].hospitals.push(entry.hospitals || []);
       if (entry.doctors) hospitalsMap[hospitalId].doctors.push(entry.doctors || []);
       if (entry.surgery) hospitalsMap[hospitalId].surgeries.push(entry.surgery|| []);
       if (entry.specialization) hospitalsMap[hospitalId].specializations.push(entry.specialization|| []);
       if (entry.pricing) hospitalsMap[hospitalId].pricing.push(entry.pricing|| []);
     });
 
     // Convert the hospitalsMap to an array
     const result = Object.values(hospitalsMap);
     console.log('Processed Data:', result);
 
     return result;
   } catch (err) {
     if (err === 'AbortError') {
       console.log("Request was aborted");
     } else {
       console.error("Unexpected error:", err);
     }
     return [];
   }
 };
