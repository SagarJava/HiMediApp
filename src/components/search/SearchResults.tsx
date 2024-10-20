import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonList, IonPage, IonLabel, IonButton } from '@ionic/react';
import './SearchResults.css';

interface SearchResultsProps {
  conditions: Condition[];
  doctors: Doctor[];
  hospitals: Hospital[];
}

interface Condition {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image?: string;
}

interface Hospital {
  id: number;
  name: string;
  description: string;
  image?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ conditions, doctors, hospitals }) => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<(Condition | Doctor | Hospital)[]>([]);

  const handleSearch = () => {
    const searchResults: (Condition | Doctor | Hospital)[] = [
      ...conditions.filter(condition => condition.title.toLowerCase().includes(searchText.toLowerCase())),
      ...doctors.filter(doctor => doctor.name.toLowerCase().includes(searchText.toLowerCase())),
      ...hospitals.filter(hospital => hospital.name.toLowerCase().includes(searchText.toLowerCase()))
    ];
    setResults(searchResults);
  };

  return (
    <IonPage  style={{marginTop: "36px"}}>
      <IonContent>
        <div className="search-container">
          <IonInput
            value={searchText}
            placeholder="Search conditions, doctors, hospitals"
            onIonChange={e => setSearchText(e.detail.value!)}
            clearInput
            className="search-input"
          />
          <IonButton expand="block" onClick={handleSearch}>Search</IonButton>
        </div>

        <IonList>
          {results.map((result, index) => (
            <IonItem key={index} className="search-result-card">
              <img src={result.image || '/assets/placeholder.png'} alt={result.title || result.name} className="result-image" />
              <IonLabel>
                <h2>{'title' in result ? result.title : result.name}</h2>
                <p>{result.description || result.specialization}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SearchResults;
