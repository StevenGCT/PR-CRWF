import axios from 'axios'

export const getFundsRequests = async () => await axios.get('/funding')