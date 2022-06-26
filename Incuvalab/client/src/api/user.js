import axios from 'axios'


export const getUserRequest = async () => await axios.get('/users');

export const getUserByIdRequest = async (id) => await axios.get('/users/' + id);



export const getCountUserFundingRequest = async (id) => await axios.get('/users/countFunding/'+id);

export const getCountUserDonatedFundingRequest = async (id) => await axios.get('/users/countDonated/'+id);

export const getCountUserFollowedFundingRequest = async (id) => await axios.get('/users/countFollowed/'+id);



export const getUserFundingRequest = async (id) => await axios.get('/users/TitleFunding/3');

export const getUserDonatedFundingRequest = async () => await axios.get('/users/TitleFundingDonated/3');

export const getUserFollowedFundingRequest = async () => await axios.get('/users/Followed/3');

export const getAllCategorysRequest = async () => await axios.get('/categorys');

export const createFundingRequest = async (funding) => {
    const form = new FormData()

    for (let key in funding) {
       form.append(key, funding[key])
    }

   return await axios.post("/Funding", form,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}


export const changePassword = async (id, NewPassword) => await axios.put(`/users/change/${id}`,  NewPassword);

export const putFundingRequest = async (funding) => 
{
    const form = new FormData()

    for (let key in funding) {
       form.append(key, funding[key])
    }

    return await axios.put('/updateFunding',  form,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

//export const createProjectRequest = async (project) => await axios.post('api/Funding')