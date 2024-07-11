import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getConsultations = async () => {
  const response = await axios.get(`${API_URL}/consultations`);
  return response.data;
};

export const createConsultation = async (consultationData) => {
  const response = await axios.post(`${API_URL}/consultations`, consultationData);
  return response.data;
};
