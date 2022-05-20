import { Router } from 'express';
import { LoadImage } from '../controllers/cloudynari';

const router = Router();

// Get Rank Funding
router.post('/imageURL', LoadImage);

export default router;