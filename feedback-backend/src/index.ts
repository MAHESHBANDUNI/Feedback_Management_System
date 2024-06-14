
import express from 'express';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/api/feedback', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
