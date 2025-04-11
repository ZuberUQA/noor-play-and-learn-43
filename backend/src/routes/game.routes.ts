
import express from 'express';
import {
  getAllGames,
  getGameBySlug,
  createGame,
  updateGame,
  deleteGame,
  getGameById,
} from '../controllers/game.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = express.Router();

// Public routes
router.get('/', getAllGames);
router.get('/:slug', getGameBySlug);
router.get('/id/:id', getGameById); // Make getGameById accessible without auth for convenience

// Admin routes - protected
router.post('/', protect, authorize('admin'), createGame);
router.put('/:id', protect, authorize('admin'), updateGame);
router.delete('/:id', protect, authorize('admin'), deleteGame);

export default router;
