import { Router } from 'express';
import { updateUserById, createUser, getUserById, deleteUserById, getLoginUser, getTypeUserById, getUserEditList} from '../controllers/userController';

const router = Router();
// Insert User
router.post('/user', createUser);
// Get User
router.get('/user/:id', getUserById);
// Login User
router.post('/userLogin', getLoginUser);
// delete User
router.delete('/user/:id', deleteUserById);
// Update User
router.put('/user/:id', updateUserById);

router.get('/userType/:id', getTypeUserById);
// Get all user for a list
router.get('/userlist', getUserEditList);

export default router;