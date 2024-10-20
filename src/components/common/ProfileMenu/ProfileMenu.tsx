import React from 'react';
import { IonList, IonItem, IonLabel, IonMenu, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonMenuToggle, IonIcon, IonModal } from '@ionic/react';
import './ProfileMenu.css';


const menuOptions = [
  { title: 'My Profile', path: '/profile' },
  { title: 'Appointments & Surgeries', path: '/appointments' },
  { title: 'Help Us', path: '/help' },
  { title: 'Coupons', path: '/coupons' },
  { title: 'Policy', path: '/policy' },
  { title: 'Notifications', path: '/notifications' },
  { title: 'Rate Us', path: '/rate-us' },
  { title: 'Terms and Conditions', path: '/terms' },
  { title: 'Logout', path: '/logout' },
];
interface ProfileMenuProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}
const ProfileMenu: React.FC<ProfileMenuProps> = ({ showModal, setShowModal }) => {
  return (
    <>
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} className="profile-modal">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Profile Options</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {menuOptions.map((option, index) => (
              <IonItem key={index} button routerLink={option.path} onClick={() => setShowModal(false)}>
                <IonLabel>{option.title}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};

export default ProfileMenu;
