import React from 'react';
import './ConditionsTreated.css';

interface ConditionsTreatedProps {
  conditions: string[];
}

const ConditionsTreated: React.FC<ConditionsTreatedProps> = ({ conditions }) => {
  return (
    <div className="conditions-treated">
      <h2>Conditions Treated</h2>
      <ul>
        {conditions.map((condition, index) => (
          <li key={index}>{condition}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConditionsTreated;
