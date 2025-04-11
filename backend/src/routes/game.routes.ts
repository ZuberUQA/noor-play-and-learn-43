
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

// Admin routes
router.use(protect);
router.use(authorize('admin'));

router.post('/', createGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);
router.get('/id/:id', getGameById); // Add specific route for getting game by ID

export default router;
