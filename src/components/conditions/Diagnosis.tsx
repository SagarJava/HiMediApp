
import React from 'react';
import './Diagnosis.css';

interface DiagnosisProps {
  diagnosis: string[];
}

const Diagnosis: React.FC<DiagnosisProps> = ({ diagnosis }) => {
  return (
    <div className="diagnosis">
      <h2>Diagnosis</h2>
      <ul>
        {diagnosis.map((diag, index) => (
          <li key={index}>{diag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Diagnosis;
