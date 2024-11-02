import { IonCard, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useState, useEffect } from 'react';
import { addDoctorRating } from '../services/ratingApi';

const RatingPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  // useEffect(() => {
  //   async function fetchDoctors() {
  //     const doctorsData = await getDoctors();
  //     setDoctors(doctorsData);
  //   }
  //   fetchDoctors();
  // }, []);

  const handleSubmit = async () => {
    if (rating > 0) {
      await addDoctorRating({
        rating:4,
        review: review,    
        userid: 1,
        doctorid: 2,
        hospitalid: 3
      });
    }
  };

  return (
    <IonCard>
      {/* <IonList>
        {doctors.map((doctor) => (
          <IonItem key={doctor.id} onClick={() => setSelectedDoctor(doctor)}>
            <IonLabel>{doctor.name}</IonLabel>
          </IonItem>
        ))}
      </IonList> */}

      {/* {selectedDoctor && (
        <> {selectedDoctor.name}*/}
          <IonItem>
            <IonLabel>Rate MASHESH</IonLabel>
            <input
              type="number"
              max={5}
              min={1}
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Review</IonLabel>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </IonItem>
          <IonButton onClick={handleSubmit}>Submit Rating</IonButton>
        {/* </>
      )} */}
    </IonCard>
  );
};
export default RatingPage;
