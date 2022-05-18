import { Router } from 'express';
import { setRanckFunding , getFundingById } from '../controllers/fundingController';

const router = Router();

// Get Rank Funding
router.get('/Funding/rank', setRanckFunding);
router.get('/Funding/:id', getFundingById);

export default router;