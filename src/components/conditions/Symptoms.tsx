
import React from 'react';
import './Symptoms.css';

interface SymptomsProps {
  symptoms: string[];
}

const Symptoms: React.FC<SymptomsProps> = ({ symptoms }) => {
  return (
    <div className="symptoms">
      <h2>Symptoms</h2>
      <ul>
        {symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
    </div>
  );
};

export default Symptoms;
