import { Router } from 'express';
import { getComments, createComment, deleteCommentById } from '../controllers/commentController';


const router = Router();
// Get List of categories
router.get('/comments/:id', getComments);
// Insert Category
router.post('/comment', createComment);
// delete Category
router.delete('/comment/:id', deleteCommentById);


export default router;