
import React from 'react';
import './Causes.css';

interface CausesProps {
  causes: string[];
}

const Causes: React.FC<CausesProps> = ({ causes }) => {
  return (
    <div className="causes">
      <h2>Causes</h2>
      <ul>
        {causes.map((cause, index) => (
          <li key={index}>{cause}</li>
        ))}
      </ul>
    </div>
  );
};

export default Causes;
