import axios from 'axios';

const API_URL = 'http://localhost:3000/api/feedback';

export const getFeedbacks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const submitFeedback = async (name: string, feedback: string) => {
  console.log('Submitting feedback:', { name, feedback });
  const response = await axios.post(API_URL, { name, feedback });
  console.log('Response received:', response.data);
  return response.data;
};
