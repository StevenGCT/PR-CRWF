import axios from 'axios'


export const getUserRequest = async () => await axios.get('/users');

export const getUserByIdRequest = async (id) => await axios.get('/users/' + id);

export const getCountUserFundingRequest = async () => await axios.get('/users/countFunding/3');

export const getUserFundingRequest = async () => await axios.get('/users/TitleFunding/3');

export const getCountUserDonatedFundingRequest = async () => await axios.get('/users/countDonated/3');

export const getUserDonatedFundingRequest = async () => await axios.get('/users/TitleFundingDonated/3');

export const getCountUserFollowedFundingRequest = async () => await axios.get('/users/countFollowed/3');

export const getUserFollowedFundingRequest = async () => await axios.get('/users/Followed/3');

export const getAllCategorysRequest = async () => await axios.get('/categorys');

export const createFundingRequest = async (funding) => await axios.post("/Funding", funding);

export const changePassword = async (id, NewPassword) => await axios.put(`/users/change/${id}`,  NewPassword);

export const putFundingRequest = async (funding) => await axios.put('/updateFunding',  funding);

//export const createProjectRequest = async (project) => await axios.post('api/Funding')