import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonTitle, IonHeader, IonToolbar, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonAlert } from '@ionic/react';
import { supabase } from '../config/supaBaseConfig';

  const BloodDonationForm: React.FC = () => {
    const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [disease, setDisease] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [address, setAddress] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const handleBloodRegister = async () => {
      
      try {
       
        const { data, error } = await supabase
          .from('blooddonation')
          .insert([
            {
              name: name,
              age: age,
              gender: gender,
              mobileno: mobileNo,
              address: address,
              bloodType: bloodType,
            },
          ]);
  
        if (error) throw error;
        setShowSuccessAlert(true);
      } catch (error) {
        alert('Error uploading file: ' + error);
      }
    };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blood Donation Registration Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput
            value={name}
            placeholder="Enter your name"
            onIonChange={(e) => setName(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Age</IonLabel>
          <IonInput
            value={age}
            placeholder="Enter your age"
            onIonChange={(e) => setAge(e.detail.value!)}
          />
        </IonItem>
          <IonRadioGroup value={gender} onIonChange={(e) => setGender(e.detail.value)}>
            Gender
          <IonItem>
            <IonLabel>Male</IonLabel>
            <IonRadio slot="start" value="male" />
          </IonItem>
          <IonItem>
            <IonLabel>Female</IonLabel>
            <IonRadio slot="start" value="female" />
          </IonItem>
        </IonRadioGroup>
        <IonItem>
          <IonLabel position="stacked">Mobile No</IonLabel>
          <IonInput
            value={mobileNo}
            placeholder="Enter your MobileNo"
            onIonChange={(e) => setMobileNo(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Address</IonLabel>
          <IonInput
            value={address}
            placeholder="Enter your Address"
            onIonChange={(e) => setAddress(e.detail.value!)}
          />
        </IonItem>
         <IonItem>
          <IonLabel>Blood Type</IonLabel>
          <IonSelect value={bloodType} placeholder="Select one" onIonChange={(e) => setBloodType(e.detail.value)}>
            <IonSelectOption value="bloodbank">Bloodbank</IonSelectOption>
            <IonSelectOption value="plasma">Plasma</IonSelectOption>
            <IonSelectOption value="platelet">Platelet</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton expand="block" onClick={handleBloodRegister}>
          Register
        </IonButton>
        <IonAlert
          isOpen={showSuccessAlert}
          onDidDismiss={() => setShowSuccessAlert(false)} // Close alert after dismissal
          header="Blood Donation Registration Successful"
          message="Your registration was successful!"
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default BloodDonationForm;
