import axios from "axios";

export const getPostsRequest = async () => await axios.get("/Funding/rank");

export const getPostRequest = async (id) => await axios.get("/Funding/rank" + id);

export const deletePostRequest = async (id) =>
  await axios.delete("/Funding/rank" + id);

export const createPostRequest = async (post) => {
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post("/Funding/rank", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePostRequest = async (id, newPostFields) => {
  return axios.put("/Funding/rank" + id, newPostFields);
};
