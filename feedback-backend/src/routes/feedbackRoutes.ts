import { Router } from 'express';
import FeedbackController from '../controllers/feedbackController';

const router = Router();
const feedbackController = new FeedbackController();

router.get('/', feedbackController.getAllFeedback);
router.post('/', feedbackController.submitFeedback);

export default router;
