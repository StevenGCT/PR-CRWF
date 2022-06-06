import axios from 'axios'

export const getFundsRequests = async () => await axios.get('/funding')

export const getFundsRequestsByCat = async (id) => await axios.get('/funding/category/' + id)

export const getFundsAprobeRequests = async () => await axios.get('/request-funding')

export const getFundsErasedRequests = async () => await axios.get('/oldfunding')

export const getFundsCompletedRequests = async () => await axios.get('/fullfunding')

export const aproveRequestsOfList = async (id) => await axios.put('/funding/aprove/' + id)

export const moveRequestToBault = async (id) => await axios.put('/funding/move/' + id)

export const removeRequestFromBault = async (id) => await axios.put('/funding/restore/' + id)

export const permanentDeleteRequest = async (id) => await axios.delete('/funding/delete/' + id)
