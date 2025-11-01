const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_POSTS_SUCCESS":
      return { ...state, loading: false, posts: action.payload };
    case "FETCH_POSTS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "FETCH_POST_SUCCESS":
      return { ...state, post: action.payload };

    case "ADD_POST_SUCCESS":
      return { ...state, posts: [action.payload, ...state.posts] };

    case "UPDATE_POST_SUCCESS":
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };

    default:
      return state;
  }
};

export default postReducer;