import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonTitle, IonHeader, IonToolbar, IonRadio, IonRadioGroup, IonAlert } from '@ionic/react';
import { supabase } from '../config/supaBaseConfig';

  const NeutrisionForm: React.FC = () => {
    const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [disease, setDisease] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [allergies, setAllergies] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const handleNeutrisionRegister = async () => {      
      try {       
        const { data, error } = await supabase
          .from('neutrision')
          .insert([
            {
              name: name,
              age: age,
              gender: gender,
              diseases: disease,
              allergies: allergies,
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
          <IonTitle>Neutrision Registration Form</IonTitle>
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
          <IonLabel position="stacked">Allergis</IonLabel>
          <IonInput
            value={allergies}
            placeholder="Enter your allergis"
            onIonChange={(e) => setAllergies(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Diseases</IonLabel>
          <IonInput
            value={disease}
            placeholder="Enter your diseases"
            onIonChange={(e) => setDisease(e.detail.value!)}
          />
        </IonItem>
        <IonButton expand="block" onClick={handleNeutrisionRegister}>
          Register
        </IonButton>
        <IonAlert
          isOpen={showSuccessAlert}
          onDidDismiss={() => setShowSuccessAlert(false)} // Close alert after dismissal
          header="Neutrision Registration Successful"
          message="Your registration was successful!"
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default NeutrisionForm;
