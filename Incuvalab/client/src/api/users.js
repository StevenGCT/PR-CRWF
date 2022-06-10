import axios from 'axios';

export const registerUserRequest = async (user) => await axios.post('/user', user)

export const loginUserRequest = async (user) => await axios.post('/userLogin', user)

export const getTypeUserRequest = async (id) => await axios.get('/userType/'+ id)

export const deleteReqById = async (id) => await axios.delete('/user/'+ id)

export const userListToEditRequest = async () => await axios.get('/userlist')

export const userDonateFundingRequest = async (id) => await axios.get('/userDonate/'+ id)