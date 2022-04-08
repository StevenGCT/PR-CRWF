import { Router } from 'express';
import { updateCategoryById, getCategorys, createCategory, getCategoryById, deleteCategoryById, getCountCategory } from '../controllers/categoryController';


const router = Router();
// Get List of categories
router.get('/categorys', getCategorys);
// Insert Category
router.post('/categorys', createCategory);
// Get Count Category
router.get('/categorys/count', getCountCategory);
// Get Category BY ID
router.get('/categorys/:id', getCategoryById);
// delete Category
router.delete('/categorys/:id', deleteCategoryById);
// Update Category
router.put('/categorys/:id', updateCategoryById);


export default router;