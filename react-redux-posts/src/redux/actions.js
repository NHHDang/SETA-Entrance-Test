import axios from 'axios';

// Action types
export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';

// Fetch API
export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({
        type: FETCH_POSTS,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// Thêm bài viết mới
export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
      dispatch({
        type: ADD_POST,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
    }
  };
};
