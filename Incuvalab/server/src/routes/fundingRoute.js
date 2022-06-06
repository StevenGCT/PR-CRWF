import { Router } from 'express';
import { setRanckFunding, createFunding, getFunding, getFundingByCat, getFundingById, getOldFunding } from '../controllers/fundingController';

const router = Router();

// Get Rank Funding
router.get('/Funding/rank', setRanckFunding);
router.post('/Funding', createFunding);

// Get Fundung BY ID
router.get('/Funding/:id', getFundingById);

// Get List of funding
router.get('/funding', getFunding);
// Get List of deleted fundings
router.get('/oldfunding', getOldFunding);
// Get Fundung BY Category
router.get('/funding/category/:id', getFundingByCat);

export default router;