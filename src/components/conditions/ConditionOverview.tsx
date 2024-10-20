
import React from 'react';
import './ConditionOverview.css';

interface ConditionOverviewProps {
  title: string;
  description: string;
  image: string;
}

const ConditionOverview: React.FC<ConditionOverviewProps> = ({ title, description, image }) => {
  return (
    <div className="condition-overview">
      <img src={image} alt={title} className="condition-image" />
      <div className="condition-info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ConditionOverview;
