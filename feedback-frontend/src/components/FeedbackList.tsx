import React, { useEffect, useState } from 'react';
import { getFeedbacks } from '../services/feedbackService';

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<{ name: string; feedback: string }[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const data = await getFeedbacks();
      setFeedbacks(data);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <strong>{feedback.name}</strong>: {feedback.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
