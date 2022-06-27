import axios from 'axios';

export const getCodeQrRequest = async () => await axios.get('/qrcode')

export const QrDeleteRequest = async (IdQr) => await axios.delete('/qrcode/'+IdQr)
export const putCodeQrRequest = async () => await axios.put('/qrcode/:id')
export const postCodeQrRequest = async () => await axios.post('/qrcode')