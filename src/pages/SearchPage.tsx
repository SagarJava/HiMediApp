import React from 'react';
import SearchResults from '../components/search/SearchResults';

const SearchPage: React.FC = () => {
  const conditions = [
    { id: 1, title: 'Heart Attack', description: 'A heart attack occurs when the flow of blood to the heart is blocked.', image: '/assets/heart-attack.jpg' },
    { id: 2, title: 'Diabetes', description: 'A chronic condition that affects how your body processes blood sugar (glucose).', image: '/assets/diabetes.jpg' },
  ];

  const doctors = [
    { id: 1, name: 'Dr. Ajay Mittal', specialization: 'Cardiac Sciences', image: '/assets/dr-ajay-mittal.jpg' },
    { id: 2, name: 'Dr. Vandana Gupta', specialization: 'Medical Oncologist', image: '/assets/doctor-vandana-gupta.jpg' },
  ];

  const hospitals = [
    { id: 1, name: 'Max Institute of Cancer Care', description: 'Max Institute of Cancer Care is one of the top cancer care centers in India.', image: '/assets/max-institute-of-cancer-care.jpg' },
    { id: 2, name: 'Apollo Hospital', description: 'A leading hospital offering state-of-the-art medical care.', image: '/assets/apollo-hospital.jpg' },
  ];

  return <SearchResults conditions={conditions} doctors={doctors} hospitals={hospitals} />;
};

export default SearchPage;
