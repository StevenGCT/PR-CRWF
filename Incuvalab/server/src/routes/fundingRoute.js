import { Router } from 'express';
import { getFunding, getFundingByCat, getFundingById } from '../controllers/fundingController';

const router = Router();

// Get List of funding
router.get('/funding', getFunding);
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