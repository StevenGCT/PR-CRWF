import axios from 'axios';

export const getFundingByIdRequest = async (idFunding) => await axios.get('/funding/'+idFunding)
