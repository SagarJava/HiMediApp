import React from 'react';
import './DepartmentOverview.css';

interface DepartmentOverviewProps {
  title: string;
  description: string;
  image: string;
}

const DepartmentOverview: React.FC<DepartmentOverviewProps> = ({ title, description, image }) => {
  return (
    <div className="department-overview">
      <img src={image} alt={title} className="department-image" />
      <div className="department-info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DepartmentOverview;
