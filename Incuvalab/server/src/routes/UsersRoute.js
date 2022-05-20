import { Router } from 'express';
import { getUsers, getUserById, getCountFundingByUserId, getTitleFundingByUserId, getCountDonateByUserId, getTitleOfFundingDonateByUserId, getTitleOfFollowedFundingByUserId, getCountFollowedFundingByUserId } from '../controllers/usersController';


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
// Get Count Followed Funding
router.get('/users/countFollowed/:id', getCountFollowedFundingByUserId);
// Get Title Followed Fonding 
router.get('/users/Followed/:id', getTitleOfFollowedFundingByUserId);

export default router;