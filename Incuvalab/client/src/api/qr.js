import axios from 'axios';

export const getCodeQrRequest = async () => await axios.get('/qrcode')

export const QrDeleteRequest = async (IdQr) => await axios.delete('/qrcode/'+IdQr)

export const putCodeQrRequest = async () => await axios.put('/qrcode/')

export const postCodeQrRequest = async (postQr) => {
    const form = new FormData()

    for(let key in postQr){
        form.append(key ,postQr[key])
    }

    return await axios.post('/qrcode',form,{
        headers:{
            "Content-Type": "mulptipart/form-data"
        }
    })
}
