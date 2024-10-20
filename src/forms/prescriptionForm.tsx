import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonTitle, IonHeader, IonToolbar, IonRadio, IonRadioGroup, IonAlert } from '@ionic/react';
import { supabase } from '../config/supaBaseConfig';

  const PrescriptionForm: React.FC = () => {
    const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [file, setPrescriptionDoc] = useState<File>();
  const [uploading, setUploading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        setPrescriptionDoc(files[0]);
      }
    };
  
    // Upload file to Supabase Storage and store metadata
    const handlePrescriptionRegister = async () => {
      
      try {
        if (!file ) {
          alert('Please select a file and ensure user is logged in.');
          return;
        }
    
        setUploading(true);
        const { data: fileData, error: fileError } = await supabase.storage
          .from('userfiles')
          .upload(`prescription/${file.name}`, file);
  
        if (fileError) throw fileError;
  
        // Get the file's public URL
        const fileUrl = supabase.storage.from('userfiles').getPublicUrl(fileData?.path).data.publicUrl;
  
        // Insert prescription metadata into Supabase database
        const { data, error } = await supabase
          .from('prescription')
          .insert([
            {
              name: name,
              age: age,
              gender: gender,
              mobileno: mobileNo,
              prescriptiondoc: fileUrl,
            },
          ]);
  
        if (error) throw error;
        setShowSuccessAlert(true);
      } catch (error) {
        alert('Error uploading file: ' + error);
      } finally {
        setUploading(false);
      }
    };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Prescription Form</IonTitle>
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
          <IonLabel position="stacked">Upload Prescription Details</IonLabel>
          <input type="file" onChange={handleFileChange} />
        </IonItem>
        <IonButton expand="block" onClick={handlePrescriptionRegister}>
          Register
        </IonButton>
        <IonAlert
          isOpen={showSuccessAlert}
          onDidDismiss={() => setShowSuccessAlert(false)} // Close alert after dismissal
          header="Prescription Registration Successful"
          message="Your registration was successful!"
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default PrescriptionForm;
