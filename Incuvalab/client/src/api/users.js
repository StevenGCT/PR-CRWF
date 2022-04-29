import axios from 'axios';

export const registerUserRequest = async (user) => await axios.post('/user', user)

export const loginUserRequest = async (user) => await axios.post('/userLogin', user)
