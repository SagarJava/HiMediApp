
import React from 'react';
import './Address.css';
import { IonBreadcrumb, IonContent, IonPage } from '@ionic/react';

interface AddressProps {
  address?: string;
}

const Address: React.FC<AddressProps> = ({ address }) => {
  return (
        <IonBreadcrumb >
        <div className="address">
      <h2 className="background-header">Address</h2>
      <p>{address}</p>
    </div>
        </IonBreadcrumb>
  );
};

export default Address;
