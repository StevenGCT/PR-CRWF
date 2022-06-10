import axios from 'axios';

/*export const getFundingByIdRequest = async (idFunding) => await axios.get('/funding/'+idFunding)
export const getFundingTop3Request = async () => await axios.get('/fundingRank3')*/

export const getFundingByIdRequest = async (idFunding) => await axios.get('/funding/'+idFunding)
export const getFundingTop3Request = async () => await axios.get('/Funding/rank')

