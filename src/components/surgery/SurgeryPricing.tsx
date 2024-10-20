import React from 'react';
import './SurgeryOverview.css';
import { PricingModel } from '../../models/pricing';

interface SurgeryPricingProps {
  pricing?:PricingModel[];
}
const SurgeryPricing: React.FC<SurgeryPricingProps> = ({ pricing }) => {
  return (
    <div className="doctors-list">
    <h2 className="background-header">Pricing details with the Surgery</h2>
    <div className="doctors-grid">
      {pricing?.map((p, index) => (
        <div key={index} className="doctor-card">
          {/* <img src={doctor.image} alt={doctor.name} className="doctor-image" /> */}
          <h3 className="background-header">{p.pricing_name}</h3>
          <p>{p.pricing_description}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default SurgeryPricing;
