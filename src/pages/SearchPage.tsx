
import SearchResults from '../components/search/SearchResults';
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
import { HospitalsModel } from '../models/hospital';
import { SearchApiModel, SearchModel, SearchQueryModel } from '../models/search';
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
import { SpecializationModel } from '../models/specialization';
import { PricingModel } from '../models/pricing';
const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useState({ /* initial search parameters */ });
  const [searchData, setSearchData] = useState<SearchApiModel[] | undefined>(undefined);
  const [hospitals, setHospital] = useState<HospitalsModel[] | undefined>(undefined);
  const [surgery, setSurgery] = useState<SurgeryModel[] | undefined>(undefined);
  const [doctors, setDoctors] = useState<DoctorModel[] | undefined>(undefined);
  const [specialties, setSpecialization] = useState<SpecializationModel[] | undefined>(undefined);
  const [pricing, setPricing] = useState<PricingModel[] | undefined>(undefined);
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
      let searchApiData:SearchApiModel[] = await advanceSearch(searchParamsReq, signal);   
      if(searchApiData)
      setHospital(searchApiData[0].hospitals);
      setDoctors(searchApiData[0].doctors);
      setSpecialization(searchApiData[0].specialization);
      setSurgery(searchApiData[0].surgeries);
      setSearchData(searchApiData);
      setPricing(searchApiData[0].pricing);
      console.log('hospitals?.length ',searchApiData[0].hospitals);
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
        <div className="popular-hospitals ion-margin-bottom">
          <h2 className="ion-margin-bottom">Popular Hospitals Near You</h2>
         
            {
              searchData?.map((globalData,index) => (
                // globalData.hospitals.map((hospital,index) => (
                 <div>
                   <IonCard className=''>
                    <div>
                   
                  <IonAvatar slot="start">
                    <img src={globalData.hospitals[0].image} alt="Apollo Hospital" />
                  </IonAvatar>
                  </div>
                  <div>
                  <IonRouterLink
                    className="searchLink"
                    href={`/hospital/${globalData.hospitals[0].hospital_id}`}
                  >
                    <IonLabel>
                      <h2>{globalData.hospitals[0].hospital_name}</h2>
                      <p>2.5 km away</p>
                    </IonLabel>
                    <IonLabel>
                      <h2>{globalData.surgeries[0].surgery_name}</h2>
                    </IonLabel>
                    <IonLabel>
                      <h2>Starting from {globalData.pricing.length && globalData.pricing[0].cost}</h2>
                    </IonLabel>
                  </IonRouterLink>
                  <IonBadge color="primary" slot="end">4.5 <IonIcon icon={star} /></IonBadge>
                  </div>
                  </IonCard>
                  </div>
                // ))
              ))}
        </div>
      </IonContent>

    </IonPage>
  );
};

export default SearchPage;
