import axios from 'axios'

export const getCatRequests = async () => await axios.get('/categorys')