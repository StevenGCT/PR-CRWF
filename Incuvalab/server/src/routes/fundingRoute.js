import { Router } from 'express';
import { getFunding, getFundingByCat, getFundingById, getOldFunding, getQuestionFunding } from '../controllers/fundingController';

const router = Router();

// Get List of funding
router.get('/funding', getFunding);
// Get List of all not aprobed funding
router.get('/request-funding', getQuestionFunding);
// Get List of deleted fundings
router.get('/oldfunding', getOldFunding);
// Get Fundung BY ID
router.get('/funding/:id', getFundingById);
// Get Fundung BY Category
router.get('/funding/category/:id', getFundingByCat);
/*
// Insert Funding
router.post('/funding', createCategory);
// Get Count Category
router.get('/funding/count', getCountCategory);

// delete Category
router.delete('/categorys/:id', deleteCategoryById);
// Update Category
router.put('/categorys/:id', updateCategoryById);
*/

export default router;