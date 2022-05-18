import axios from 'axios'

export const getUserRequest = async () => await axios.get('http://localhost:4000/users')

//export const createProjectRequest = async (project) => await axios.post('api/Funding')