import { Router } from 'express';
import { updatePasswordByUserId, getUsers, getUserById, getCountFundingsCreateByUserId, getTitleFundingByUserId,  getCountDonationsByUserId , getTitleOfFundingDonateByUserId, getTitleOfFollowedFundingByUserId, getCountFollowedByUserId, setUserFollowedInsert } from '../controllers/usersController';


const router = Router();
// Get List of Users
router.get('/users', getUsers);
// Get User BY ID
router.get('/users/:id', getUserById);

router.get('/users/countFunding/:id', getCountFundingsCreateByUserId);
router.get('/users/countDonated/:id',  getCountDonationsByUserId );
router.get('/users/countFollowed/:id', getCountFollowedByUserId);


router.get('/users/TitleFunding/:id', getTitleFundingByUserId);
router.get('/users/TitleFundingDonated/:id', getTitleOfFundingDonateByUserId);
router.get('/users/Followed/:id', getTitleOfFollowedFundingByUserId);

router.post('/users/Followed/', setUserFollowedInsert);

// Put Password  
router.put('/users/changePassword/:id', updatePasswordByUserId);

export default router;