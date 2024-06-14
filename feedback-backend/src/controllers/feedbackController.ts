import { Request, Response } from 'express';
import FeedbackService from '../services/feedbackService';

class FeedbackController {
  private feedbackService: FeedbackService;

  constructor() {
    this.feedbackService = new FeedbackService();
  }

  public getAllFeedback = (req: Request, res: Response) => {
    const feedbacks = this.feedbackService.getAllFeedback();
    res.status(200).json(feedbacks);
  };

  public submitFeedback = (req: Request, res: Response) => {
    console.log('Request received:', req.body);
    const { name, feedback } = req.body;
    this.feedbackService.addFeedback({ name, feedback });
    res.status(201).json({ message: 'Feedback submitted successfully' });
  };
}

export default FeedbackController;
