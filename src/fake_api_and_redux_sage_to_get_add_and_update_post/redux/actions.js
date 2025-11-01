import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });
  try {
    const res = await axios.get(API_URL);
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "FETCH_POSTS_FAILURE", payload: err.message });
  }
};

export const fetchPostById = (id) => async (dispatch) => {
  const res = await axios.get(`${API_URL}/${id}`);
  dispatch({ type: "FETCH_POST_SUCCESS", payload: res.data });
};

export const addPost = (post) => async (dispatch) => {
  const res = await axios.post(API_URL, post);
  alert("Post added successfully!");
  dispatch({ type: "ADD_POST_SUCCESS", payload: res.data });
};

export const updatePost = (id, post) => async (dispatch) => {
  const res = await axios.put(`${API_URL}/${id}`, post);
  alert("Post updated successfully!");
  dispatch({ type: "UPDATE_POST_SUCCESS", payload: res.data });
};