import { Router } from 'express';
import { setRanckFunding, createFunding, getFunding, getFundingByCat, getFundingById, getOldFunding, getQuestionFunding } from '../controllers/fundingController';

const router = Router();

// Get Rank Funding
router.get('/Funding/rank', setRanckFunding);
router.post('/Funding', createFunding);

// Get Fundung BY ID
router.get('/Funding/:id', getFundingById);
// Get List of all not aprobed funding
router.get('/request-funding', getQuestionFunding);
// Get List of funding
router.get('/funding', getFunding);
// Get List of deleted fundings
router.get('/oldfunding', getOldFunding);
// Get Fundung BY Category
router.get('/funding/category/:id', getFundingByCat);

export default router;