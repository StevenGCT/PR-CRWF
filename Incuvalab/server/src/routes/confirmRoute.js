import { Router } from 'express';
import {getDonation } from '../controllers/confirmController';

const router = Router();
router.get('/confirm/donations', getDonation);

export default router;