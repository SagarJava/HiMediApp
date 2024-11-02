import { Redirect, Route } from "react-router-dom";
import { calendar, chatbubble, water } from 'ionicons/icons';

import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { call, ellipse, filter, home, personCircleOutline, phoneLandscape, square, triangle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import "./theme/variables.css";
import "swiper/swiper-bundle.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import SurgeryDetail from "./pages/SurgeryDetail";
import DepartmentDetail from "./pages/DepartmentDetail";
import ConditionDetail from "./pages/ConditionDetail";
import DoctorDetail from "./pages/DoctorDetail";
import HospitalDetail from "./pages/HospitalDetail";
import {
  ellipsisHorizontal,
  ellipsisVertical,
  personCircle,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import ProfileMenu from "./components/common/ProfileMenu/ProfileMenu";
import { SearchModel } from "./models/search";
import { fetchSearchDoctors, fetchSearchHoisptals, fetchSearchSurgerys } from "./services/searchApi";
import RatingPage from "./pages/ratingPage";
import SearchPage from "./pages/SearchPage";
setupIonicReact();
const App: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  // Filtered services based on search text
  const [filteredServices, setFilteredServices] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [filteredSurgeryServices, setFilteredSurgeryServices] = useState<SearchModel[]>([]);
  const [filteredHospitalServices, setFilteredHospitalServices] = useState<SearchModel[]>([]);
  const [filteredDoctorsServices, setFilteredDoctorsServices] = useState<SearchModel[]>([]);
  useEffect(()=> {
const getAllSearchData= async ()=>{
let hospitalSearchData=await fetchSearchHoisptals();
let surgerySearchData=await fetchSearchSurgerys();
let doctorSearchData=await fetchSearchDoctors();
setFilteredHospitalServices(hospitalSearchData);
setFilteredDoctorsServices(doctorSearchData);
setFilteredSurgeryServices(surgerySearchData);

} 
getAllSearchData()
},[]
);
  return (
    <IonApp>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="small">Hi, Medi</IonTitle>
          <IonButtons slot="secondary">
            <IonButton onClick={() => setShowModal(true)}>
              <IonIcon
                slot="icon-only"
                ios={personCircleOutline}
                md={personCircleOutline}
              ></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon
                slot="icon-only"
                ios={ellipsisHorizontal}
                md={ellipsisVertical}
              ></IonIcon>
            </IonButton>
          </IonButtons>
          <IonSearchbar
            value={searchText}
            onIonInput={(e) => {
              if (e.detail.value === "") {
                setSearchText("");
                setFilteredServices([]);
              } else {
                setSearchText(e.detail.value!);
                const servicesSearch=[...filteredHospitalServices,...filteredSurgeryServices,...filteredDoctorsServices];
                setFilteredServices(servicesSearch);
              }
            }}
            placeholder="Search Surgeries, Hospitals or Doctors"
          ></IonSearchbar>
          {filteredServices.length > 0 &&
            filteredServices.map((service) => (
              <IonItem key={service.id}>
                <a
                  className="serachLink"
                  href={service.href + "/" + service.id}
                >
                  {service.name}
                </a>
              </IonItem>
            ))}
        </IonToolbar>
      </IonHeader>
      <ProfileMenu showModal={showModal} setShowModal={setShowModal} />
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/doctor/:id">
              <DoctorDetail />
            </Route>
            <Route exact path="/surgery/:id">
              <SurgeryDetail />
            </Route>
            <Route exact path="/department/:id">
              <DepartmentDetail />
            </Route>
            <Route exact path="/conditions/:id">
              <ConditionDetail />
            </Route>
            <Route path="/hospital/:id">
              <HospitalDetail />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/ratingPage/:id">
              <RatingPage />
            </Route>
            <Route exact path="/search">
              <SearchPage />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/home">
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="appointments" href="/appointments">
          <IonIcon icon={calendar} />
          <IonLabel>Appointments</IonLabel>
        </IonTabButton>
        <IonTabButton tab="consult" href="/consult">
          <IonIcon icon={chatbubble} />
          <IonLabel>Consult</IonLabel>
        </IonTabButton>
        <IonTabButton tab="blood" href="/blood">
          <IonIcon icon={water} />
          <IonLabel>Blood</IonLabel>
        </IonTabButton>
            <IonTabButton tab="tab3" href="/profile">
              <IonIcon aria-hidden="true" icon={personCircle} />
              <IonLabel>profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

