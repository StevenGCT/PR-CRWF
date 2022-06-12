import { Router } from 'express';
import { getCodeQr, createQr,getCodeQrById,deleteQrCodeById,updateQrCodeById } from '../controllers/codeQrController';


const router = Router();
// Get List of categories
router.get('/qrcode', getCodeQr);
// Insert Category
router.post('/qrcode', createQr);
// Get Category BY ID
router.get('/qrcode/:id', getCodeQrById);
// delete Category
router.delete('/qrcode/:id', deleteQrCodeById);
// Update Category
router.put('/qrcode/:id', updateQrCodeById);


export default router;