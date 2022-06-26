import { Router } from 'express';
import { updatePasswordByUserId, getUsers, getUserById, getCountFundingsCreateByUserId, getTitleFundingByUserId,  getCountDonationsByUserId , getTitleOfFundingDonateByUserId, getTitleOfFollowedFundingByUserId, getCountFollowedByUserId } from '../controllers/usersController';


const router = Router();
// Get List of Users
router.get('/users', getUsers);
// Get User BY ID
router.get('/users/:id', getUserById);

// Get Count Fonding
router.get('/users/countFunding/:id', getCountFundingsCreateByUserId);
router.get('/users/countDonated/:id',  getCountDonationsByUserId );
router.get('/users/countFollowed/:id', getCountFollowedByUserId);

// Get Title Fonding
router.get('/users/TitleFunding/:id', getTitleFundingByUserId);

// Get Title Fonding Donnated
router.get('/users/TitleFundingDonated/:id', getTitleOfFundingDonateByUserId);
// Get Title Followed Fonding 
router.get('/users/Followed/:id', getTitleOfFollowedFundingByUserId);
// Put Password  
router.put('/users/changePassword/:id', updatePasswordByUserId);

export default router;