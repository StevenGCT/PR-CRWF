import { createContext, useContext, useEffect, useState } from "react";
import {
  getPostsRequest,
  deletePostRequest,
  createPostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts2";

const postContext2 = createContext();

export const usePosts2 = () => {
  const context = useContext(postContext2);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};

export const PostProvider2 = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getPostsRequest();
      setPosts(res.data);
    })();
  }, []);

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      setPosts([...posts, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const res = await updatePostRequest(id, post);
      setPosts(posts.map((post) => (post._id === id ? res.data : post)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <postContext2.Provider
      value={{ posts, deletePost, createPost, getPost, updatePost }}
    >
      {children}
    </postContext2.Provider>
  );
};
