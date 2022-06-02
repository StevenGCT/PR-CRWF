import { Router } from 'express';
import { setRanckFunding, createFunding, getFunding, getFundingByCat, getFundingById, getOldFunding, getQuestionFunding, getAllFundingBySameName, getAllCompleteFunding } from '../controllers/fundingController';

const router = Router();

// Get Rank Funding
router.get('/Funding/rank', setRanckFunding);
router.post('/Funding', createFunding);

// Get Funding BY ID
router.get('/Funding/:id', getFundingById);
// Get a List of all not aprobed funding
router.get('/request-funding', getQuestionFunding);
// Get a List of funding
router.get('/funding', getFunding);
// Get a List of deleted fundings
router.get('/oldfunding', getOldFunding);
// Get a List of Completed fundings
router.get('/fullfunding', getAllCompleteFunding);
// Get Funding BY Category
router.get('/funding/category/:id', getFundingByCat);
// Get Funding By name
router.get('/funding/name' , getAllFundingBySameName)

export default router;