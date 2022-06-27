import axios from 'axios'

export const getDonationRequest = async () => await axios.get('/donation')

export const createDonationRequest = async (donation) => {
    const form = new FormData();
    for (let key in donation) {
      form.append(key, donation[key]);
    }
    return await axios.post("/donation", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
