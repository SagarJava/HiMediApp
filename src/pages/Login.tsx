import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonText, IonContent, IonPage } from '@ionic/react';
import { sendOtp, verifyOtp } from '../config/oauth/MobileAuth';
import { useHistory } from 'react-router-dom';
const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [stage, setStage] = useState<'send' | 'verify'>('send');
  const [message, setMessage] = useState<string>('');
  const history = useHistory();
  const handleSendOtp = async () => {
    const success = await sendOtp(phoneNumber);
    if (success) {
      setStage('verify');
      setMessage('OTP sent!');
    } else {
      setMessage('Failed to send OTP.');
    }
  };

  const handleVerifyOtp = async () => {
    const success = await verifyOtp(otp, phoneNumber);
    if (success) {
      setMessage('OTP verified! You are logged in.');
      history.push('/home');
    } else {
      setMessage('Failed to verify OTP.');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {stage === 'send' ? (
          <>
            <IonItem>
              <IonLabel position="floating">Phone Number</IonLabel>
              <IonInput
                value={phoneNumber}
                onIonChange={e => setPhoneNumber(e.detail.value!)}
                type="tel"
              />
            </IonItem>
            <IonButton expand="full" onClick={handleSendOtp}>Send OTP</IonButton>
          </>
        ) : (
          <>
            <IonItem>
              <IonLabel position="floating">OTP</IonLabel>
              <IonInput
                value={otp}
                onIonChange={e => setOtp(e.detail.value!)}
                type="number"
              />
            </IonItem>
            <IonButton expand="full" onClick={handleVerifyOtp}>Verify OTP</IonButton>
          </>
        )}
        {message ? <IonText color="danger"><p>{message}</p></IonText> : null}
      </IonContent>
    </IonPage>
  );
};

export default Login;
