import { Router } from 'express';
import { setRanckFunding, createFunding, getFunding, getFundingByCat, getFundingById, getOldFunding, getQuestionFunding, getAllFundingBySameName, getAllCompleteFunding, setRanckTop3, deletePointedFunding, deletePointedLogicalFunding, AproveFunding, restoreBaultedFunding } from '../controllers/fundingController';

const router = Router();

// Get Rank Funding
router.get('/Funding/rank', setRanckFunding);
router.post('/Funding', createFunding);

// Get Funding BY ID
router.get('/funding/:id', getFundingById);
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
router.post('/funding/name' , getAllFundingBySameName);
// Get Funding Top 3
router.get('/fundingRank3' , setRanckTop3 );
// Logical delete/deny of funding
router.put('/funding/move/:id', deletePointedLogicalFunding);
// Complete delete of funding
router.delete('/funding/delete/:id', deletePointedFunding);
// Aprove of funding
router.put('/funding/aprove/:id', AproveFunding);
// Restore from bault of funding
router.put('/funding/restore/:id', restoreBaultedFunding);


export default router;