export interface DoctorRatingModel {
    id: number;
    rating: number;
    review: string;    
    userId: number;
    doctorId: number;
  }

  export interface HospitalRatingModel {
    id: number;
    h_id: number;
    d_id: number;
    s_id: number;
    rating: number;
    review: string;
  }
    
  