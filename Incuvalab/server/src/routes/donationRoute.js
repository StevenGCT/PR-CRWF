import { Router } from 'express';
import { getAllDonationFromBd, InsertDonation,getDonationByID,deleteDonation,updateDonation } from '../controllers/donationController';


const router = Router();
// Get List of categories
router.get('/donation', getAllDonationFromBd);
// Insert Category
router.post('/donation', InsertDonation);
// Get Category BY ID
router.get('/donation/:id', getDonationByID);
// delete Category
router.delete('/donation/:id', deleteDonation);
// Update Category
router.put('/donation/:id', updateDonation);


export default router;