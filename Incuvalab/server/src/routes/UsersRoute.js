import { Router } from 'express';
import { getUsers, getUserById, getCountFundingByUserId, getTitleFundingByUserId, getCountDonateByUserId, getTitleOfFundingDonateByUserId } from '../controllers/usersController';


const router = Router();
// Get List of Users
router.get('/users', getUsers);
// Get User BY ID
router.get('/users/:id', getUserById);
// Get Count Fonding
router.get('/users/countFunding/:id', getCountFundingByUserId);
// Get Title Fonding
router.get('/users/TitleFunding/:id', getTitleFundingByUserId);
// Get Count Donated
router.get('/users/countDonated/:id', getCountDonateByUserId);
// Get Title Fonding Donnated
router.get('/users/TitleFundingDonated/:id', getTitleOfFundingDonateByUserId);

export default router;