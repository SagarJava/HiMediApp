import React from 'react';
import './TreatmentsOffered.css';

interface TreatmentsOfferedProps {
  treatments: string[];
}

const TreatmentsOffered: React.FC<TreatmentsOfferedProps> = ({ treatments }) => {
  return (
    <div className="treatments-offered">
      <h2>Treatments Offered</h2>
      <ul>
        {treatments.map((treatment, index) => (
          <li key={index}>{treatment}</li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentsOffered;
