
import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonBreadcrumb,
  IonImg,
  IonRouterLink,
  IonList
} from '@ionic/react';
import { useHistory } from 'react-router';
import { fetchHoisptal, fetchHoisptalById } from '../services/hospitalApi';
import { fetchHospitalDoctorById } from '../services/hospitalDoctorApi';
import { useParams } from 'react-router';
import { IonReactRouter } from "@ionic/react-router";
import { DoctorModel } from '../models/doctor';
import { HospitalModel } from '../models/hospital';
import { SearchModel, SearchQueryModel } from '../models/search';
import { SurgeryModel } from '../models/surgery';
import { fetchDoctor } from '../services/doctorApi';
import { fetchSearchHoisptals, fetchSearchSurgerys, fetchSearchDoctors, advanceSearch } from '../services/searchApi';
import { fetchSurgery } from '../services/surgeryApi';
import {
  IonIcon,
  IonLabel,
  IonAvatar,
  IonBadge,
  IonChip,
} from '@ionic/react';
import { person, star, medkit, heart, fitness } from 'ionicons/icons';
const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  // Filtered services based on search text
  const [filteredServices, setFilteredServices] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [filteredSurgeryServices, setFilteredSurgeryServices] = useState<SearchModel[]>([]);
  const [filteredHospitalServices, setFilteredHospitalServices] = useState<SearchModel[]>([]);
  const [filteredDoctorsServices, setFilteredDoctorsServices] = useState<SearchModel[]>([]);
  const [hospitalsData, setHospital] = useState<HospitalModel[]>([]);
  const [surgerysData, setSurgerys] = useState<SurgeryModel[]>([]);
  const [doctorsData, setDoctors] = useState<DoctorModel[]>([]);
  const [searchParams, setSearchParams] = useState({ /* initial search parameters */ });
  const { id }: any = useParams();
  useEffect(() => {
    const getAllSearchData = async () => {
      //advance search 
      const controller = new AbortController();
      const { signal } = controller;
      const searchParamsReq: Partial<SearchQueryModel> = {
        rating: {
          minimum: 4,
          maximum: 5,
        },
        // location: "New York",
        specialization: "cancer",
        price: {
          minimum: 500,
          maximum: 50000,
        },
        // hospitalType: HospitalType.HIGH,
        // insurance: "Aetna",
        // sortBy: SortType.ASC,
      };
      setSearchParams(searchParamsReq
        )
      const data = await advanceSearch(searchParamsReq, signal);


      let hospitalSearchData = await fetchSearchHoisptals();
      let surgerySearchData = await fetchSearchSurgerys();
      let doctorSearchData = await fetchSearchDoctors();
      setFilteredHospitalServices(hospitalSearchData);
      setFilteredDoctorsServices(doctorSearchData);
      setFilteredSurgeryServices(surgerySearchData);
      let hospitalApiData: HospitalModel[] = await fetchHoisptal();
      let surgeryApiData: SurgeryModel[]=await fetchSurgery();
      let doctorApiData: DoctorModel[]=await fetchDoctor();
      if (hospitalApiData.length)
        setHospital(hospitalApiData);
      setSurgerys(surgeryApiData);
      setDoctors(doctorApiData);
    }
    getAllSearchData()
  }, []
  );
  const history = useHistory();
  const redirectTOOurServices = async (ourServiceId: String) => {
    history.push(`/doctor/${ourServiceId}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hi, Abhi</IonTitle>
          <IonIcon slot="end" icon={person} className="ion-padding-end" />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar placeholder="Search hospitals or treatment"
        value={searchText}
        onIonInput={(e) => {
          if (e.detail.value === "") {
            setSearchText("");
            setFilteredServices([]);
          } else {
            setSearchText(e.detail.value!);
            const servicesSearch = [...filteredHospitalServices, ...filteredSurgeryServices, ...filteredDoctorsServices];
            setFilteredServices(servicesSearch);
          }
        }}
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
        <div className="recent-searches ion-margin-bottom">
          <h2 className="ion-margin-bottom">Recent Searches</h2>
          <IonChip>Filter</IonChip>
          <IonChip>Nearest</IonChip>
          <IonChip>SortBy</IonChip>
        </div>
        
        <div className="popular-hospitals ion-margin-bottom">
          <h2 className="ion-margin-bottom">Popular Hospitals Near You</h2>
          <IonList>
          {hospitalsData.length > 0 &&
            hospitalsData.map((hospital) => (

            <IonItem>
              <IonAvatar slot="start">
                <img src={hospital?.image} alt="Apollo Hospital" />
              </IonAvatar>
              <IonRouterLink
                  className="searchLink"
                  href={`/hospital/${hospital.hospital_id}`}
                >
              <IonLabel>
                <h2>{hospital?.hospital_name}</h2>
                <p>2.5 km away</p>
              </IonLabel>
              </IonRouterLink>
              <IonBadge color="primary" slot="end">4.5 <IonIcon icon={star} /></IonBadge>
            </IonItem>
             ))}
          </IonList>
        </div>
        
        <IonCard color="primary" className="ion-margin-bottom">
          <IonCardContent>
            <h2>Book a Free Consultation with Us</h2>
            <p>Get Started</p>
          </IonCardContent>
        </IonCard>
        
        <div className="explore-categories ion-margin-bottom">
          <h2 className="ion-margin-bottom">Explore Categories</h2>
          <IonList>
          {surgerysData.length > 0 &&
            surgerysData.map((surgery) => (
            <IonItem>
              <IonRouterLink
                  className="searchLink"
                  href={`/surgery/${surgery.surgery_id}`}
                >
              <IonIcon icon={heart} slot="start" color="danger" />
              <IonLabel>{surgery.surgery_name}</IonLabel>
              </IonRouterLink>
            </IonItem>
             ))}
          </IonList>
        </div>
        
        <div className="explore-doctors ion-margin-bottom">
          <h2 className="ion-margin-bottom">Explore by Doctors</h2>
          <IonList className="hospitalView">
          {doctorsData.length > 0 &&
            doctorsData.map((doctor) => (
            <IonItem>
              <IonAvatar slot="start">
                <img src={doctor?.image} alt="Dr. Joseph K" />
              </IonAvatar>
              <IonRouterLink
                  className="searchLink"
                  href={`/doctor/${doctor.doctor_id}`}
                >
              <IonLabel>
                <h2>{doctor.doctor_name}</h2>
                <p>{doctor.doctor_specialization}</p>
              </IonLabel>
              </IonRouterLink>
              <IonBadge color="success" slot="end">Available</IonBadge>
            </IonItem>))}
          </IonList>
        </div>
        
        <IonCard color="primary">
          <IonCardContent>
            <h3>Dr. Joseph K</h3>
            <p>General Consultation</p>
            <p>Book Appointment</p>
          </IonCardContent>
          <IonRouterLink
                  href={`/ratingPage`}
                >
              <IonLabel>
                <h2>RateDoctor</h2>
              </IonLabel>
              </IonRouterLink>
        </IonCard>
      </IonContent>
      
    </IonPage>
  );
};

export default Home;