
import express from 'express';
import {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getRandomQuestions,
} from '../controllers/question.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = express.Router();

// Public routes
router.get('/:gameSlug/questions', getQuestions);
router.get('/:gameSlug/questions/random', getRandomQuestions);
router.get('/:gameSlug/questions/:questionId', getQuestion);

// Admin routes - Make sure protect and authorize are applied correctly
router.post('/:gameSlug/questions', protect, authorize('admin'), createQuestion);
router.put('/:gameSlug/questions/:questionId', protect, authorize('admin'), updateQuestion);
router.delete('/:gameSlug/questions/:questionId', protect, authorize('admin'), deleteQuestion);

export default router;
