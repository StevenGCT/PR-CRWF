import axios from 'axios'

export const getFundsRequests = async () => await axios.get('/funding')

export const getFundsRequestsByCat = async (id) => await axios.get('/funding/category/' + id)

export const getFundsAprobeRequests = async () => await axios.get('/request-funding')

export const getFundsErasedRequests = async () => await axios.get('/oldfunding')