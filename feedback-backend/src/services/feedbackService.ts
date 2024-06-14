import { Feedback } from '../models/feedback';

class FeedbackService {
  private feedbacks: Feedback[] = [];

  public getAllFeedback(): Feedback[] {
    return this.feedbacks;
  }

  public addFeedback(feedback: Feedback): void {
    this.feedbacks.push(feedback);
  }
}

export default FeedbackService;
