import { FETCH_POSTS, ADD_POST } from './actions';

const initialState = {
  posts: []
};

// Reducer để xử lý các action
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
