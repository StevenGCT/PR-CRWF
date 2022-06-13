import axios from 'axios';

export const getCodeQrRequest = async () => await axios.get('/qrcode')