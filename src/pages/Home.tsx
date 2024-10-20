import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  // IonButton,
} from "@ionic/react";

import HomeSlider from "../components/home/HomeSlider";
import Carousel from "../components/home/IconListComponent";
import { useHistory } from "react-router";

const services = [
  { icon: "images/services-doctor.png", text: "Doctor Consultation"},
  { icon: "images/services-second-opinion.png", text: "Second Opinion" },
  { icon: "images/services-medical-loan.png", text: "Medical Loan" },
  { icon: "images/services-doctor.png", text: "Doctor Consultation" },
  { icon: "images/services-second-opinion.png", text: "Second Opinion" },
  { icon: "images/services-medical-loan.png", text: "Medical Loan" },
];
const conditions = [
  { icon: "images/hernia-icon.png", text: "Hernia" },
  { icon: "images/IVF.png", text: "IVF" },
  { icon: "images/TKR.png", text: "TKR" },
  { icon: "images/hernia-icon.png", text: "Hernia" },
  { icon: "images/IVF.png", text: "IVF" },
  { icon: "images/TKR.png", text: "TKR" },
];

const treatments = [
  { icon: "images/hernia-icon.png", text: "Hernia" },
  { icon: "images/IVF.png", text: "IVF" },
  { icon: "images/TKR.png", text: "TKR" },
  { icon: "images/hernia-icon.png", text: "Hernia" },
  { icon: "images/IVF.png", text: "IVF" },
  { icon: "images/TKR.png", text: "TKR" },
];

const Home: React.FC = () => { 
  const history = useHistory();
  const redirectTOOurServices = async (ourServiceId: String) => {
    history.push(`/doctor/${ourServiceId}`);
  };
   return (
    <IonPage style={{marginTop: "36px"}}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <HomeSlider></HomeSlider>
              <Carousel title="Our Services" items={services} />
              <Carousel title="Conditions" items={conditions} />
              <Carousel title="Treatments" items={treatments} />
        <IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
