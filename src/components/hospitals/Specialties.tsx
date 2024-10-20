
import React from 'react';
import './Specialties.css';

interface SpecialtiesProps {
  specialties?: string[];
}

const Specialties: React.FC<SpecialtiesProps> = ({ specialties }) => {
  return (
    <div className="specialties">
      <h2 className="background-header">Specialties</h2>
      <ul>
        {specialties?.map((specialty, index) => (
          <li key={index}>{specialty}</li>
        ))}
      </ul>
    </div>
  );
};

export default Specialties;
