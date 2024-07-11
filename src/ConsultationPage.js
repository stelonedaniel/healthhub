import React, { useEffect, useState } from 'react';
import { getConsultations } from '../services/consultationService';

function ConsultationPage() {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      const data = await getConsultations();
      setConsultations(data);
    };

    fetchConsultations();
  }, []);

  return (
    <div>
      <h1>Consultations</h1>
      <ul>
        {consultations.map((consultation) => (
          <li key={consultation._id}>{consultation.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default ConsultationPage;
