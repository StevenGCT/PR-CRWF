import { Router } from 'express';
import { setRanckFunding } from '../controllers/fundingController';

const router = Router();

// Get Rank Funding
router.get('/Funding/rank', setRanckFunding);

export default router;