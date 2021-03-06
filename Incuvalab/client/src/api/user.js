import axios from 'axios'

//export const getUserRequest = async () => await axios.get('http://localhost:4000/users')
//export const getUserFundingRequest = async () => await axios.get('http://localhost:4000/users/TitleFunding/3')

export const getUserRequest = async () => await axios.get('http://localhost:4000/users');

export const getUserByIdRequest = async () => await axios.get('http://localhost:4000/users/3');

export const getCountUserFundingRequest = async () => await axios.get('http://localhost:4000/users/countFunding/3');

export const getUserFundingRequest = async () => await axios.get('http://localhost:4000/users/TitleFunding/3');

export const getCountUserDonatedFundingRequest = async () => await axios.get('http://localhost:4000/users/countDonated/3');

export const getUserDonatedFundingRequest = async () => await axios.get('http://localhost:4000/users/TitleFundingDonated/3');

export const getCountUserFollowedFundingRequest = async () => await axios.get('http://localhost:4000/users/countFollowed/3');

export const getUserFollowedFundingRequest = async () => await axios.get('http://localhost:4000/users/Followed/3');


//export const createProjectRequest = async (project) => await axios.post('api/Funding')